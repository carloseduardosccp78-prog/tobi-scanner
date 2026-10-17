const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORTA = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

const DADOS_ARQUIVO = path.join(__dirname, 'dados.json');

function carregarDados() {
    if (!fs.existsSync(DADOS_ARQUIVO)) {
        return { contas: [], chaves: [], acessosCompartilhados: {} };
    }
    return JSON.parse(fs.readFileSync(DADOS_ARQUIVO, 'utf8'));
}

function salvarDados(dados) {
    fs.writeFileSync(DADOS_ARQUIVO, JSON.stringify(dados, null, 2));
}

const ADMIN_USER = 'santos';
const ADMIN_PASS = '12102011';

function decodificarChave(codigo) {
    try {
        const partes = codigo.split('-');
        if (partes.length !== 5) return null;
        const dias = parseInt(partes[0]);
        if (isNaN(dias) || dias < 1 || dias > 365) return null;
        return { valido: true, dias };
    } catch {
        return null;
    }
}

function gerarCodigoChave(dias) {
    const partes = [dias.toString().padStart(2, '0')];
    for (let i = 0; i < 4; i++) {
        partes.push(Math.random().toString(36).substring(2, 6).toUpperCase());
    }
    return partes.join('-');
}

app.post('/api/admin/login', (req, res) => {
    const { usuario, senha } = req.body;
    if (usuario === ADMIN_USER && senha === ADMIN_PASS) {
        res.json({ sucesso: true });
    } else {
        res.json({ sucesso: false, erro: 'Dados incorretos' });
    }
});

app.get('/api/admin/dados', (req, res) => {
    const dados = carregarDados();
    res.json({
        chaves: dados.chaves,
        contas: dados.contas.map(c => ({
            usuario: c.usuario,
            chave: c.chave,
            expiraEm: c.expiraEm
        }))
    });
});

app.post('/api/chaves/gerar', (req, res) => {
    const { dias } = req.body;
    const dados = carregarDados();
    const codigo = gerarCodigoChave(dias);
    const expiraEm = new Date();
    expiraEm.setDate(expiraEm.getDate() + dias);
    
    dados.chaves.unshift({
        codigo,
        dias,
        criadoEm: new Date().toISOString(),
        expiraEm: expiraEm.toISOString()
    });
    
    salvarDados(dados);
    res.json({ sucesso: true, chave: codigo, expiraEm: expiraEm.toLocaleDateString('pt-BR') });
});

app.get('/api/chaves', (req, res) => {
    const dados = carregarDados();
    res.json(dados.chaves);
});

app.post('/api/chaves/excluir', (req, res) => {
    const { codigo } = req.body;
    const dados = carregarDados();
    dados.chaves = dados.chaves.filter(c => c.codigo !== codigo);
    salvarDados(dados);
    res.json({ sucesso: true });
});

app.post('/api/usuarios/verificar-chave', (req, res) => {
    const { chave } = req.body;
    const dadosChave = decodificarChave(chave);
    
    if (!dadosChave) {
        return res.json({ valido: false, erro: 'Chave inválida' });
    }
    
    const dados = carregarDados();
    const chaveServidor = dados.chaves.find(c => c.codigo === chave);
    
    if (!chaveServidor) {
        return res.json({ valido: false, erro: 'Chave não encontrada' });
    }
    
    const agora = new Date();
    const expira = new Date(chaveServidor.expiraEm);
    if (agora > expira) {
        return res.json({ valido: false, erro: 'Chave expirada' });
    }
    
    res.json({ valido: true, dias: dadosChave.dias });
});

app.post('/api/usuarios/criar', (req, res) => {
    const { usuario, senha, chave } = req.body;
    const dados = carregarDados();
    
    if (usuario.length < 3) {
        return res.json({ sucesso: false, erro: 'Usuário precisa de pelo menos 3 caracteres' });
    }
    if (senha.length < 4) {
        return res.json({ sucesso: false, erro: 'Senha muito curta' });
    }
    if (dados.contas.find(c => c.usuario === usuario)) {
        return res.json({ sucesso: false, erro: 'Nome de usuário já existe' });
    }
    
    const dadosChave = decodificarChave(chave);
    const expiraEm = new Date();
    expiraEm.setDate(expiraEm.getDate() + dadosChave.dias);
    
    dados.contas.push({
        usuario,
        senha,
        chave,
        expiraEm: expiraEm.toISOString(),
        criadoEm: new Date().toISOString()
    });
    
    salvarDados(dados);
    res.json({ 
        sucesso: true, 
        mensagem: `Conta criada! Válido até ${expiraEm.toLocaleDateString('pt-BR')}`,
        expiraEm: expiraEm.toISOString()
    });
});

app.post('/api/usuarios/login', (req, res) => {
    const { usuario, senha } = req.body;
    const dados = carregarDados();
    
    const conta = dados.contas.find(c => c.usuario === usuario && c.senha === senha);
    
    if (!conta) {
        return res.json({ sucesso: false, erro: 'Usuário ou senha incorretos' });
    }
    
    const agora = new Date();
    const expira = new Date(conta.expiraEm);
    
    if (agora > expira) {
        return res.json({ sucesso: false, erro: 'Sua licença expirou!' });
    }
    
    const diasRestantes = Math.ceil((expira - agora) / (1000 * 60 * 60 * 24));
    
    res.json({
        sucesso: true,
        usuario: conta.usuario,
        expiraEm: conta.expiraEm,
        diasRestantes
    });
});

app.listen(PORTA, () => {
    console.log(`✅ Servidor rodando na porta ${PORTA}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
