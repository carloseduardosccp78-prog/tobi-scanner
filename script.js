// ==========================================
// 🛡️ TOBI SECRET — SCRIPT COM SERVIDOR v3.0
// ✅ Login funciona de QUALQUER lugar
// ✅ Pode compartilhar usuário e senha
// ✅ Chave reutilizável para comunidade
// ✅ Auto-expiração da licença
// ==========================================

const API_URL = '/api';

// --------------------------
// 🔍 BANCO COMPLETO DE RASTROS
// --------------------------
const RASTROS = {
    PROXY: {
        "com.proxy.free": "Proxy Free",
        "com.proxyall": "Proxy All",
        "com.proxyff.app": "Proxy FF",
        "com.dripclient.proxy": "Drip Proxy",
        "com.xit.proxy": "Xit Proxy",
        "com.proxy.tnt.v20": "TNT Proxy",
        "com.mthteam.app": "MTH App",
        "com.proxy.regeditstore": "Regedit Proxy",
        "com.cubanproxy.app": "Cuban Proxy",
        "io.gringoxp.proxy.garena.freefire": "GrindXP Proxy",
        "com.interbank.inter": "Banco Inter",
        "com.freestyle": "FreeStyle",
        "com.freestyle.painel": "FreeStyle Painel",
        "DreamXiter.ofc": "DreamXiter",
        "com.calculadora.calc": "Calculadora",
        "com.mdk.ff": "MDK FF",
        "com.my.newproject7": "My Project7",
        "com.mycompany.proxyv32": "Proxy v32",
        "com.mcdo.mcdonaldss": "McDonald's",
        "com.bard": "Bard AI",
        "com.openai.chatgptx": "Proxy ChatGPT",
        "com.snoopy.proxy": "Snoopy Proxy",
        "com.netflix.mediaclientx": "Netflix Falso",
        "com.lucasqueiroz.fitcal": "FitCal",
        "com.spotify.musicx": "Spotify Falso",
        "br.com.intermediumx": "Inter Falso",
        "com.sylvaz.app": "Sylvaz App"
    },
    FFH4X: {
        "com.ffh4x.lite": "FFH4X Lite",
        "com.ffh4x.proxy": "FFH4X Proxy",
        "com.ffh4x.dts.freefireth": "FFH4X DTS 1",
        "com.ffh4x.dts.freefireth2": "FFH4X DTS 2",
        "com.ffh4x": "FFH4X",
        "com.ffh4x.mars2022": "FFH4X Mars2022",
        "com.mt7.ffh4x": "MT7 FFH4X",
        "com.ffh4x.mobile": "FFH4X Mobile",
        "com.my.ffh4xinjector": "FFH4X Injector",
        "com.leomodzffh4x": "LeoModZ FFH4X",
        "com.h4xhdv.ffh4xraistarmacrofire": "FFH4X Raistar MacroFire",
        "com.ultraffh4x.proversionv52": "FFH4X Ultra v52",
        "com.ultraffh4x.proversionv59": "FFH4X Ultra v59",
        "com.headtrick.injetor": "HeadTrick Injetor"
    },
    PAINEIS: {
        "com.painelextreme": "Painel Extreme",
        "com.painel.regedit": "Painel Regedit",
        "com.painelgoxit.nick": "Painel Goxit",
        "com.painelkillua": "Painel Killua",
        "com.painellegitxit": "Painel LegitXit",
        "com.painelclt.MainActivity": "Painel CLT Activity",
        "com.painelclt": "Painel CLT",
        "com.painelnetflix.diixiters": "Painel Netflix",
        "com.azure.painel": "Painel Azure",
        "com.joelff.painel": "Painel Joel FF",
        "com.painel.devdiones": "Painel DevDiones",
        "com.ofcregg.regedit": "Regedit OFC",
        "com.panelregedit.linexyz": "Painel Regedit LineXYZ",
        "com.my.msiappplayerregeditff": "MSI App Player Regedit",
        "com.android.painelregedit": "Painel Regedit Android",
        "com.sl.regedits": "SL Regedits",
        "com.painelalpha.byfeitan": "Painel Alpha",
        "com.painel.jujutsukaisen": "Painel Jujutsu Kaisen",
        "com.jujutsu.kaisen.pro.headtrick": "Jujutsu Kaisen HeadTrick",
        "com.painelregedit.lineff": "Painel Regedit Line FF",
        "com.sxpacote.app.headtrickingactivity": "HeadTrick Activity",
        "com.regedit.green.ms.app.player.ff": "Regedit Green MSI Player",
        "com.maximo.painelled": "Painel Maximo",
        "com.my.newpavani.headtricktelaactivity": "HeadTrick Tela Activity",
        "com.br.painel8": "BR Painel 8",
        "com.xvideos.painel": "Painel Suspeito (XVideos)",
        "pkg{com.regedit.auto.headshot}": "Auto Headshot Regedit"
    },
    SUSPEITO: {
        "VRI[TermuxActivity]": "Termux Detectado",
        "(pkg=me.piebridge.brevent": "Brevent (Bloqueador de Processos)",
        "com.android.system.service.optimizer": "System Optimizer",
        "com.nu.roxinha": "Nu Roxinha",
        "com.nvt.cc": "NVT CC",
        "com.android.sellestw": "Sellestw",
        "com.mycompany.myapp": "My Company App",
        "com.snakeio": "Snake IO",
        "pkg{com.full}": "External do Gui",
        "com.pornhub": "PornHub",
        "com.killuatasty": "Killua Tasty",
        "com.vortex.seller": "Vortex Seller",
        "z9kx.q4m": "Z9KX Q4M",
        "com.auraletal.sy": "Aura Letal SY",
        "com.gtr.team": "GTR Team",
        "com.Sx2.Team.Ban": "SX2 Team Ban",
        "mister.sensi": "Mister Sensi",
        "package=android.settings.com": "Android Settings Falso",
        "com.basicallygames.baldisbasicsclassic.modmenu": "Baldi's Basics Mod Menu"
    },
    REMOTE: {
        "polonium.site/live/": "Polonium Site"
    },
    PASSADOR: [
        "usb debugging", "adb enabled", "adbd started",
        "UsbDebuggingManager", "Wireless debugging connected", "socket opened",
        "0.0.0.0:5555", "adb connect", "adb disconnect"
    ],
    EXTERNAL: [
        "root access granted", "shell input tap", "shell input swipe",
        "magisk daemon started", "zygisk initialized", "lsposed loaded",
        "am start via shell", "SSLHandshakeException", "Burp Suite certificate",
        "Charles Proxy active", "mitmproxy connected", "tun0 up",
        "VPN connected", "su binary detected"
    ],
    REMOTE_LOGS: [
        "adbd listening on tcp 5555", "ADB TCP enabled", "adb wifi enabled",
        "USB debugging enabled", "adb shell session opened", "adb forward active",
        "adb reverse active", "system remount rw detected", "ro.debuggable=1",
        "ro.secure=0", "SELinux permissive", "xposed framework active",
        "kernelsu active", "overlays detected", "adb device authorized"
    ]
};

// --------------------------
// 💾 GERENCIAMENTO DE SESSÃO
// --------------------------
let usuarioAtual = JSON.parse(localStorage.getItem('tobi_usuario') || 'null');

function salvarSessao(usuario) {
    usuarioAtual = usuario;
    localStorage.setItem('tobi_usuario', JSON.stringify(usuario));
}

function limparSessao() {
    usuarioAtual = null;
    localStorage.removeItem('tobi_usuario');
}

function mostrarTela(nomeTela) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    const tela = document.getElementById('tela-' + nomeTela);
    if (tela) tela.classList.add('ativa');
}

// --------------------------
// 🔑 FUNÇÕES DA API
// --------------------------
async function requisicao(url, dados = {}, metodo = 'POST') {
    try {
        const res = await fetch(`${API_URL}${url}`, {
            method: metodo,
            headers: { 'Content-Type': 'application/json' },
            body: metodo !== 'GET' ? JSON.stringify(dados) : undefined
        });
        return await res.json();
    } catch (erro) {
        console.error('Erro na requisição:', erro);
        return { sucesso: false, erro: 'Erro de conexão. Tente novamente.' };
    }
}

async function verificarChave() {
    const input = document.getElementById('input-chave');
    const msg = document.getElementById('msg-chave');
    const chave = input.value.trim().toUpperCase();

    if (!chave) {
        msg.textContent = '⚠️ Digite uma chave de ativação';
        msg.className = 'mensagem erro';
        return;
    }

    const res = await requisicao('/usuarios/verificar-chave', { chave });
    
    if (res.valido) {
        msg.textContent = `✅ Chave válida! Acesso por ${res.dias} dias. Crie sua conta:`;
        msg.className = 'mensagem sucesso';
        localStorage.setItem('chave_em_uso', chave);
        document.getElementById('form-conta').classList.remove('escondido');
    } else {
        msg.textContent = '❌ ' + (res.erro || 'Chave inválida');
        msg.className = 'mensagem erro';
    }
}

async function criarConta() {
    const usuario = document.getElementById('input-nome-usuario').value.trim();
    const senha = document.getElementById('input-nome-senha').value;
    const confirmarSenha = document.getElementById('input-confirmar-senha').value;
    const msg = document.getElementById('msg-conta');
    const chave = localStorage.getItem('chave_em_uso');

    if (!usuario || usuario.length < 3) {
        msg.textContent = '❌ Usuário precisa de pelo menos 3 caracteres';
        msg.className = 'mensagem erro';
        return;
    }
    if (senha.length < 4) {
        msg.textContent = '❌ Senha muito curta (mínimo 4 caracteres)';
        msg.className = 'mensagem erro';
        return;
    }
    if (senha !== confirmarSenha) {
        msg.textContent = '❌ As senhas não coincidem';
        msg.className = 'mensagem erro';
        return;
    }
    if (!chave) {
        msg.textContent = '❌ Valide uma chave primeiro';
        msg.className = 'mensagem erro';
        return;
    }

    const res = await requisicao('/usuarios/criar', { usuario, senha, chave });
    
    if (res.sucesso) {
        msg.textContent = '✅ ' + res.mensagem + ' Entrando...';
        msg.className = 'mensagem sucesso';
        localStorage.removeItem('chave_em_uso');
        setTimeout(() => fazerLoginDireto(usuario, senha), 800);
    } else {
        msg.textContent = '❌ ' + res.erro;
        msg.className = 'mensagem erro';
    }
}

async function fazerLogin() {
    const usuario = document.getElementById('input-login-usuario').value.trim();
    const senha = document.getElementById('input-login-senha').value;
    const msg = document.getElementById('msg-login');

    if (!usuario || !senha) {
        msg.textContent = '⚠️ Preencha todos os campos';
        msg.className = 'mensagem erro';
        return;
    }

    const res = await requisicao('/usuarios/login', { usuario, senha });
    
    if (res.sucesso) {
        salvarSessao(res);
        entrarSistema();
    } else {
        msg.textContent = '❌ ' + res.erro;
        msg.className = 'mensagem erro';
    }
}

async function fazerLoginDireto(usuario, senha) {
    const res = await requisicao('/usuarios/login', { usuario, senha });
    if (res.sucesso) {
        salvarSessao(res);
        entrarSistema();
    }
}

function entrarSistema() {
    if (!usuarioAtual) return;
    
    mostrarTela('scanner');
    document.getElementById('nome-usuario-logado').textContent = usuarioAtual.usuario;
    
    const dias = usuarioAtual.diasRestantes;
    const statusEl = document.getElementById('status-validade');
    const btnAnalisar = document.getElementById('btn-analisar');
    const inputArquivo = document.getElementById('arquivo-zip');
    
    if (dias <= 0) {
        statusEl.textContent = '❌ LICENÇA EXPIRADA — Solicite nova chave';
        statusEl.style.background = 'rgba(239, 68, 68, 0.1)';
        statusEl.style.borderColor = 'rgba(239, 68, 68, 0.3)';
        statusEl.style.color = '#EF4444';
        btnAnalisar.disabled = true;
        inputArquivo.disabled = true;
    } else if (dias === 1) {
        statusEl.textContent = '⚠️ Válido por HOJE — Expira à meia-noite';
        statusEl.style.background = 'rgba(245, 158, 11, 0.08)';
        statusEl.style.borderColor = 'rgba(245, 158, 11, 0.2)';
        statusEl.style.color = '#FCD34D';
        btnAnalisar.disabled = false;
        inputArquivo.disabled = false;
    } else if (dias <= 3) {
        statusEl.textContent = `⚠️ Atenção — Válido por mais ${dias} dias`;
        statusEl.style.background = 'rgba(245, 158, 11, 0.08)';
        statusEl.style.borderColor = 'rgba(245, 158, 11, 0.2)';
        statusEl.style.color = '#FCD34D';
        btnAnalisar.disabled = false;
        inputArquivo.disabled = false;
    } else {
        statusEl.textContent = `✅ Licença ativa — Válido por mais ${dias} dias`;
        statusEl.style.background = 'rgba(34, 197, 94, 0.08)';
        statusEl.style.borderColor = 'rgba(34, 197, 94, 0.2)';
        statusEl.style.color = '#22C55E';
        btnAnalisar.disabled = false;
        inputArquivo.disabled = false;
    }
}

function sair() {
    limparSessao();
    mostrarTela('inicial');
}

// --------------------------
// ⚙️ PAINEL ADMINISTRATIVO
// --------------------------
async function loginAdmin() {
    const usuario = document.getElementById('admin-usuario').value.trim();
    const senha = document.getElementById('admin-senha').value;
    const msg = document.getElementById('msg-admin-login');

    const res = await requisicao('/admin/login', { usuario, senha });
    
    if (res.sucesso) {
        mostrarTela('admin');
        carregarDadosAdmin();
    } else {
        msg.textContent = '❌ Dados de acesso incorretos';
        msg.className = 'mensagem erro';
    }
}

function sairAdmin() {
    mostrarTela('inicial');
    document.getElementById('admin-usuario').value = '';
    document.getElementById('admin-senha').value = '';
}

async function carregarDadosAdmin() {
    const res = await requisicao('/admin/dados', {}, 'GET');
    atualizarListaChaves(res.chaves || []);
    atualizarListaContas(res.contas || []);
}

async function gerarChave() {
    const dias = parseInt(document.getElementById('tempo-dias').value);
    const res = await requisicao('/chaves/gerar', { dias });
    
    if (res.sucesso) {
        document.getElementById('caixa-chave').classList.remove('escondido');
        document.getElementById('chave-gerada').textContent = res.chave;
        document.getElementById('chave-tempo').textContent = `${dias} Dia(s) • Expira: ${res.expiraEm}`;
        carregarDadosAdmin();
    }
}

function copiarChave() {
    const codigo = document.getElementById('chave-gerada').textContent;
    navigator.clipboard.writeText(codigo).then(() => {
        alert('✅ Chave copiada!');
    });
}

function atualizarListaChaves(chaves) {
    const lista = document.getElementById('lista-chaves');
    if (!chaves || chaves.length === 0) {
        lista.innerHTML = '<p class="vazio">Nenhuma chave gerada ainda.</p>';
        return;
    }
    lista.innerHTML = chaves.map(ch => {
        const expira = new Date(ch.expiraEm);
        return `
        <div class="chave-item">
            <div class="chave-item-codigo">${ch.codigo}</div>
            <div class="chave-item-info">
                Válido por: ${ch.dias} dia(s) • Expira: ${expira.toLocaleDateString('pt-BR')}
            </div>
        </div>`;
    }).join('');
}

function atualizarListaContas(contas) {
    const lista = document.getElementById('lista-contas');
    if (!contas || contas.length === 0) {
        lista.innerHTML = '<p class="vazio">Nenhum usuário cadastrado ainda.</p>';
        return;
    }
    const agora = new Date();
    lista.innerHTML = contas.map(conta => {
        const expira = new Date(conta.expiraEm);
        const status = agora > expira ? '❌ EXPIRADA' : '✅ Ativa';
        return `
        <div class="conta-item">
            <div class="conta-item-nome">👤 ${conta.usuario} <strong>${status}</strong></div>
            <div class="conta-item-info">
                Chave: <code>${conta.chave}</code><br>
                Expira em: ${expira.toLocaleDateString('pt-BR')}
            </div>
        </div>`;
    }).join('');
}

// --------------------------
// 📊 EXTRAÇÃO DE DADOS DO DISPOSITIVO
// --------------------------
function extrairDadosDispositivo(texto) {
    if (!texto || typeof texto !== 'string') return {};
    
    const dados = {
        modelo: '', fabricante: '', marca: '', android: '', sdk: '',
        buildId: '', buildType: '', fingerprint: '', serial: '',
        bootloader: '', verifiedBoot: '', assinaturaBuild: '',
        debuggable: '', modoSeguro: '', appNome: '', pacote: '',
        dataInstalacao: '', dataAtualizacao: '', instalador: ''
    };

    const modeloMatch = texto.match(/ro\.product\.model=([^\n]+)/i) ||
                       texto.match(/\[ro\.product\.model\]: \[([^\]]+)\]/i);
    if (modeloMatch) dados.modelo = modeloMatch[1].trim();

    const fabMatch = texto.match(/ro\.product\.manufacturer=([^\n]+)/i) ||
                     texto.match(/\[ro\.product\.manufacturer\]: \[([^\]]+)\]/i);
    if (fabMatch) dados.fabricante = fabMatch[1].trim();

    const marcaMatch = texto.match(/ro\.product\.brand=([^\n]+)/i) ||
                      texto.match(/\[ro\.product\.brand\]: \[([^\]]+)\]/i);
    if (marcaMatch) dados.marca = marcaMatch[1].trim();

    const androidMatch = texto.match(/ro\.build\.version\.release=([^\n]+)/i) ||
                        texto.match(/\[ro\.build\.version\.release\]: \[([^\]]+)\]/i);
    if (androidMatch) dados.android = androidMatch[1].trim();

    const sdkMatch = texto.match(/ro\.build\.version\.sdk=(\d+)/i) ||
                    texto.match(/\[ro\.build\.version\.sdk\]: \[(\d+)\]/i);
    if (sdkMatch) dados.sdk = sdkMatch[1].trim();

    const buildIdMatch = texto.match(/ro\.build\.id=([^\n]+)/i) ||
                        texto.match(/\[ro\.build\.id\]: \[([^\]]+)\]/i);
    if (buildIdMatch) dados.buildId = buildIdMatch[1].trim();

    const buildTypeMatch = texto.match(/ro\.build\.type=([^\n]+)/i) ||
                          texto.match(/\[ro\.build\.type\]: \[([^\]]+)\]/i);
    if (buildTypeMatch) dados.buildType = buildTypeMatch[1].trim();

    const fpMatch = texto.match(/ro\.build\.fingerprint=([^\n]+)/i) ||
                   texto.match(/\[ro\.build\.fingerprint\]: \[([^\]]+)\]/i);
    if (fpMatch) dados.fingerprint = fpMatch[1].trim();

    const serialMatch = texto.match(/serialno=([^\n]+)/i) ||
                       texto.match(/\[serialno\]: \[([^\]]+)\]/i) ||
                       texto.match(/Hardware: ([A-Z0-9]+)/i);
    if (serialMatch) dados.serial = serialMatch[1].trim();

    const blMatch = texto.match(/ro\.bootloader\.state=([^\n]+)/i) ||
                   texto.match(/\[ro\.bootloader\.state\]: \[([^\]]+)\]/i) ||
                   texto.match(/Bootloader state: (\w+)/i);
    if (blMatch) {
        const val = blMatch[1].trim().toLowerCase();
        dados.bootloader = val === 'locked' ? 'Bloqueado' : val === 'unlocked' ? 'Desbloqueado' : blMatch[1].trim();
    }

    const vbMatch = texto.match(/ro\.boot\.verified=([^\n]+)/i) ||
                   texto.match(/\[ro\.boot\.verified\]: \[([^\]]+)\]/i) ||
                   texto.match(/Verified Boot: (\w+)/i);
    if (vbMatch) dados.verifiedBoot = vbMatch[1].trim();

    const keyMatch = texto.match(/ro\.build\.tags=([^\n]+)/i) ||
                    texto.match(/\[ro\.build\.tags\]: \[([^\]]+)\]/i);
    if (keyMatch) dados.assinaturaBuild = keyMatch[1].trim();

    const debugMatch = texto.match(/ro\.debuggable=(\d)/i) ||
                      texto.match(/\[ro\.debuggable\]: \[(\d)\]/i);
    if (debugMatch) dados.debuggable = debugMatch[1] === '1' ? 'Sim' : 'Não';

    const secureMatch = texto.match(/ro\.secure=(\d)/i) ||
                       texto.match(/\[ro\.secure\]: \[(\d)\]/i);
    if (secureMatch) dados.modoSeguro = secureMatch[1] === '1' ? 'Sim' : 'Não';

    const ffMatch = texto.match(/Package \[com\.dts\.freefireth\][\s\S]*?versionName=([^\n]+)[\s\S]*?firstInstallTime=([^\n]+)[\s\S]*?lastUpdateTime=([^\n]+)/i);
    if (ffMatch) {
        dados.appNome = 'Free Fire Normal: Oficial (Play Store)';
        dados.pacote = 'com.dts.freefireth';
        dados.dataInstalacao = ffMatch[2].trim();
        dados.dataAtualizacao = ffMatch[3].trim();
        dados.instalador = 'Google Play Store (com.android.vending)';
    }

    return dados;
}

// --------------------------
// 🔍 SISTEMA DE ANÁLISE
// --------------------------
let contadorUsos = parseInt(localStorage.getItem('tobi_contador') || '889');
let arquivoSelecionado = null;

function atualizarContadorUsos() {
    document.getElementById('contador-usos').textContent = contadorUsos + ' usos';
    localStorage.setItem('tobi_contador', contadorUsos);
}

async function iniciarAnalise() {
    const input = document.getElementById('arquivo-zip');
    const arquivo = input.files[0];
    
    if (!arquivo) {
        alert('⚠️ Selecione um arquivo primeiro!');
        return;
    }

    const TAM_MAX_MB = 500;
    const tamanhoMB = arquivo.size / (1024 * 1024);
    if (tamanhoMB > TAM_MAX_MB) {
        alert(`❌ Arquivo muito grande!\nTamanho: ${tamanhoMB.toFixed(2)} MB\nLimite: ${TAM_MAX_MB} MB`);
        return;
    }

    contadorUsos++;
    atualizarContadorUsos();

    document.getElementById('area-progresso').classList.remove('escondido');
    document.getElementById('area-resultados').classList.add('escondido');
    document.getElementById('btn-analisar').disabled = true;
    
    await simularProgresso();
    
    try {
        const resultados = await processarArquivo(arquivo);
        exibirResultados(resultados);
    } catch (erro) {
        alert('❌ Erro ao ler arquivo: ' + erro.message);
        console.error(erro);
    }
    
    document.getElementById('area-progresso').classList.add('escondido');
    document.getElementById('btn-analisar').disabled = false;
}

function simularProgresso() {
    const passos = [
        { p: 15, t: 'Lendo arquivo...' },
        { p: 35, t: 'Extraindo dados...' },
        { p: 55, t: 'Verificando rastros...' },
        { p: 75, t: 'Analisando sistema...' },
        { p: 90, t: 'Finalizando...' },
        { p: 100, t: 'Concluído!' }
    ];
    
    let i = 0;
    const barra = document.getElementById('barra-carregamento');
    const etiqueta = document.getElementById('etiqueta-porcentagem');
    const status = document.getElementById('texto-status');
    
    return new Promise(resolve => {
        const intervalo = setInterval(() => {
            if (i < passos.length) {
                barra.style.width = passos[i].p + '%';
                etiqueta.textContent = passos[i].p + '%';
                status.textContent = passos[i].t;
                i++;
            } else {
                clearInterval(intervalo);
                resolve();
            }
        }, 350);
    });
}

async function processarArquivo(arquivo) {
    const resultados = {
        dadosDispositivo: {},
        totalVerificados: 0,
        totalEncontrados: 0,
        categorias: {},
        itens: []
    };

    try {
        const zip = await JSZip.loadAsync(arquivo);
        const arquivosParaAnalisar = [];
        
        for (const nome in zip.files) {
            if (nome.endsWith('/')) continue;

            const nomeMin = nome.toLowerCase();
            const deveLer = 
                (nomeMin.includes('bugreport') && nomeMin.endsWith('.txt')) ||
                nomeMin === 'dumpstate.txt' ||
                (nomeMin.includes('dumpstate') && nomeMin.endsWith('.txt')) ||
                nomeMin.includes('logcat') ||
                nomeMin.endsWith('.log');

            if (deveLer) arquivosParaAnalisar.push(nome);
        }

        if (arquivosParaAnalisar.length === 0) {
            resultados.itens.push({
                nivel: '⚠️ Atenção',
                nome: 'Nenhum arquivo de log reconhecido',
                detalhe: 'Esperado: bugreport.txt, dumpstate.txt ou logcat*.txt dentro do ZIP'
            });
            return resultados;
        }

        let textoCompleto = '';
        for (const nomeArquivo of arquivosParaAnalisar) {
            try {
                const conteudo = await zip.file(nomeArquivo).async('string');
                if (conteudo && typeof conteudo === 'string') {
                    textoCompleto += conteudo + '\n';
                }
            } catch (err) {
                console.warn(`Não foi possível ler: ${nomeArquivo}`, err);
            }
        }

        if (!textoCompleto || textoCompleto.trim() === '') {
            resultados.itens.push({
                nivel: '⚠️ Atenção',
                nome: 'Arquivos vazios ou não legíveis',
                detalhe: 'Não foi possível extrair texto dos arquivos encontrados'
            });
            return resultados;
        }

        resultados.dadosDispositivo = extrairDadosDispositivo(textoCompleto);
        await analisarConteudo(textoCompleto, resultados);

    } catch (erro) {
        resultados.itens.push({
            nivel: '❌ Erro',
            nome: 'Falha ao processar arquivo',
            detalhe: erro.message
        });
        console.error('Erro no processamento:', erro);
    }

    return resultados;
}

async function analisarConteudo(texto, resultados) {
    if (!texto || typeof texto !== 'string') {
        resultados.itens.push({
            nivel: '⚠️ Atenção',
            nome: 'Sem conteúdo para análise',
            detalhe: 'O texto extraído está vazio ou em formato inválido'
        });
        return;
    }

    const textoMin = texto.toLowerCase();

    const categorias = [
        { nome: 'PROXY', dados: RASTROS.PROXY, nivel: '⚠️ Risco: Proxy' },
        { nome: 'FFH4X', dados: RASTROS.FFH4X, nivel: '🔴 Risco: Mod Menu' },
        { nome: 'PAINEIS', dados: RASTROS.PAINEIS, nivel: '🔴 Risco: Painel Externo' },
        { nome: 'SUSPEITO', dados: RASTROS.SUSPEITO, nivel: '🟡 Suspeito' },
        { nome: 'REMOTE', dados: RASTROS.REMOTE, nivel: '🔴 Risco: Conexão Remota' }
    ];

    for (const cat of categorias) {
        for (const [pacote, nome] of Object.entries(cat.dados)) {
            resultados.totalVerificados++;
            if (texto.includes(pacote)) {
                resultados.itens.push({
                    categoria: cat.nome,
                    nivel: cat.nivel,
                    nome: nome,
                    detalhe: `<code>${pacote}</code> detectado`
                });
                resultados.totalEncontrados++;
                resultados.categorias[cat.nome] = (resultados.categorias[cat.nome] || 0) + 1;
            }
        }
    }

    for (const termo of RASTROS.PASSADOR) {
        resultados.totalVerificados++;
        if (textoMin.includes(termo.toLowerCase())) {
            resultados.itens.push({
                categoria: 'PASSADOR',
                nivel: '🟡 Alerta: Depuração',
                nome: termo,
                detalhe: 'Depuração USB ou ADB pode estar ativo'
            });
            resultados.totalEncontrados++;
            resultados.categorias['PASSADOR'] = (resultados.categorias['PASSADOR'] || 0) + 1;
        }
    }

    for (const termo of RASTROS.EXTERNAL) {
        resultados.totalVerificados++;
        if (textoMin.includes(termo.toLowerCase())) {
            resultados.itens.push({
                categoria: 'EXTERNAL',
                nivel: '🔴 Risco: Modificação',
                nome: termo,
                detalhe: 'Sinais de modificação do sistema'
            });
            resultados.totalEncontrados++;
            resultados.categorias['EXTERNAL'] = (resultados.categorias['EXTERNAL'] || 0) + 1;
        }
    }

    for (const termo of RASTROS.REMOTE_LOGS) {
        resultados.totalVerificados++;
        if (textoMin.includes(termo.toLowerCase())) {
            resultados.itens.push({
                categoria: 'REMOTE_LOGS',
                nivel: '🔴 Risco: Acesso Remoto',
                nome: termo,
                detalhe: 'Configurações que permitem acesso externo'
            });
            resultados.totalEncontrados++;
            resultados.categorias['REMOTE_LOGS'] = (resultados.categorias['REMOTE_LOGS'] || 0) + 1;
        }
    }
}

function exibirResultados(res) {
    const area = document.getElementById('area-resultados');
    const lista = document.getElementById('lista-resultados');
    const dd = res.dadosDispositivo;

    if (dd.appNome) {
        document.getElementById('info-jogo').classList.remove('escondido');
        document.getElementById('app-nome').textContent = dd.appNome;
        document.getElementById('app-pacote').textContent = '📦 Pacote: ' + dd.pacote;
        document.getElementById('app-instalacao').textContent = '📅 Instalação: ' + dd.dataInstalacao;
        document.getElementById('app-atualizacao').textContent = '🔄 Atualização: ' + dd.dataAtualizacao;
        document.getElementById('app-instalador').textContent = '🛒 ' + dd.instalador;
    } else {
        document.getElementById('info-jogo').classList.add('escondido');
    }

    document.getElementById('disp-modelo').textContent = dd.modelo || '—';
    document.getElementById('disp-fabricante').textContent = dd.fabricante || '—';
    document.getElementById('disp-marca').textContent = dd.marca || '—';
    document.getElementById('disp-android').textContent = dd.android || '—';
    document.getElementById('disp-sdk').textContent = dd.sdk || '—';
    document.getElementById('disp-buildid').textContent = dd.buildId || '—';
    document.getElementById('disp-buildtype').textContent = dd.buildType || '—';
    document.getElementById('disp-fp').textContent = dd.fingerprint || '—';
    document.getElementById('disp-serial').textContent = dd.serial || '—';

    document.getElementById('sys-bootloader').textContent = dd.bootloader || '—';
    document.getElementById('sys-verifiedboot').textContent = dd.verifiedBoot || '—';
    document.getElementById('sys-assinatura').textContent = dd.assinaturaBuild || '—';
    document.getElementById('sys-debuggable').textContent = dd.debuggable || '—';
    document.getElementById('sys-seguro').textContent = dd.modoSeguro || '—';

    document.getElementById('total-verificados').textContent = res.totalVerificados;
    document.getElementById('total-encontrados').textContent = res.totalEncontrados;
    document.getElementById('categorias-afetadas').textContent = Object.keys(res.categorias).length;
    document.getElementById('data-hora').textContent = new Date().toLocaleString('pt-BR');

    const icone = document.getElementById('resultado-icone');
    const titulo = document.getElementById('titulo-resultado');
    
    if (res.totalEncontrados === 0) {
        icone.textContent = '✅';
        titulo.textContent = 'Nenhum risco detectado';
    } else if (res.totalEncontrados <= 3) {
        icone.textContent = '⚠️';
        titulo.textContent = 'Pequenas irregularidades';
    } else {
        icone.textContent = '🚨';
        titulo.textContent = 'Itens de risco detectados!';
    }

    if (res.itens.length === 0) {
        lista.innerHTML = `
        <div class="aviso-passador">
            ✅ Nenhum rastro suspeito encontrado nos arquivos analisados.
        </div>`;
    } else {
        lista.innerHTML = res.itens.map(item => `
        <div class="item-resultado">
            <div class="item-nome">${item.nivel} — ${item.nome}</div>
            <div class="item-detalhe">${item.detalhe}</div>
        </div>`).join('');
    }

    area.classList.remove('escondido');
}

function resetarUpload() {
    document.getElementById('arquivo-zip').value = '';
    arquivoSelecionado = null;
    const areaDrop = document.getElementById('area-drop');
    areaDrop.querySelector('.area-icone').textContent = '📁';
    areaDrop.querySelector('.area-texto').textContent = 'Clique para selecionar ou arraste o arquivo';
    areaDrop.querySelector('.area-formato').textContent = 'Formatos suportados: .zip • Máximo 500MB';
    areaDrop.classList.remove('selecionado');
    document.getElementById('area-resultados').classList.add('escondido');
}

document.addEventListener('DOMContentLoaded', () => {
    atualizarContadorUsos();
    
    if (usuarioAtual) {
        entrarSistema();
    }

    const areaDrop = document.getElementById('area-drop');
    const inputArquivo = document.getElementById('arquivo-zip');

    if (areaDrop && inputArquivo) {
        areaDrop.addEventListener('click', () => inputArquivo.click());
        
        areaDrop.addEventListener('dragover', (e) => {
            e.preventDefault();
            areaDrop.classList.add('selecionado');
        });
        
        areaDrop.addEventListener('dragleave', () => {
            areaDrop.classList.remove('selecionado');
        });
        
        areaDrop.addEventListener('drop', (e) => {
            e.preventDefault();
            areaDrop.classList.remove('selecionado');
            if (e.dataTransfer.files[0]) {
                inputArquivo.files = e.dataTransfer.files;
                arquivoSelecionado = inputArquivo.files[0];
                atualizarTextoArquivo();
            }
        });

        inputArquivo.addEventListener('change', (e) => {
            arquivoSelecionado = e.target.files[0];
            atualizarTextoArquivo();
        });
    }
});

function atualizarTextoArquivo() {
    if (!arquivoSelecionado) return;
    const areaDrop = document.getElementById('area-drop');
    const tamanhoMB = (arquivoSelecionado.size / 1024 / 1024).toFixed(2);
    areaDrop.querySelector('.area-icone').textContent = '✅';
    areaDrop.querySelector('.area-texto').textContent = arquivoSelecionado.name;
    areaDrop.querySelector('.area-formato').textContent = tamanhoMB + ' MB';
    areaDrop.classList.add('selecionado');
}
