// İnteraktif Araçlar - Password Tester, Network Simulator, Code Editor
// React component olarak kullanılacak

const InteractiveTools = (() => {
    const { useState, useEffect, useRef } = React;

    // 1. PASSWORD STRENGTH TESTER - BT.5.2 için
    function PasswordStrengthTester() {
        const [password, setPassword] = useState('');
        const [strength, setStrength] = useState({ score: 0, label: '', color: '', feedback: [] });

        useEffect(() => {
            analyzePassword(password);
        }, [password]);

        const analyzePassword = (pwd) => {
            if (!pwd) {
                setStrength({ score: 0, label: '', color: '', feedback: [] });
                return;
            }

            let score = 0;
            const feedback = [];

            // Uzunluk kontrolü
            if (pwd.length >= 8) {
                score += 25;
                feedback.push('✅ En az 8 karakter');
            } else {
                feedback.push('❌ En az 8 karakter olmalı');
            }

            // Büyük harf
            if (/[A-Z]/.test(pwd)) {
                score += 25;
                feedback.push('✅ Büyük harf içeriyor');
            } else {
                feedback.push('❌ Büyük harf ekle (A-Z)');
            }

            // Küçük harf
            if (/[a-z]/.test(pwd)) {
                score += 25;
                feedback.push('✅ Küçük harf içeriyor');
            } else {
                feedback.push('❌ Küçük harf ekle (a-z)');
            }

            // Rakam
            if (/[0-9]/.test(pwd)) {
                score += 15;
                feedback.push('✅ Rakam içeriyor');
            } else {
                feedback.push('❌ Rakam ekle (0-9)');
            }

            // Özel karakter
            if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
                score += 10;
                feedback.push('✅ Özel karakter içeriyor');
            } else {
                feedback.push('❌ Özel karakter ekle (!@#$%^&*)');
            }

            // Yaygın şifreler kontrolü
            const commonPasswords = ['123456', 'password', '12345678', 'qwerty', 'abc123', '111111', 'iloveyou'];
            if (commonPasswords.some(common => pwd.toLowerCase().includes(common))) {
                score = Math.min(score, 20);
                feedback.push('⚠️ Çok yaygın bir şifre kullanıyorsun!');
            }

            // Skor değerlendirmesi
            let label, color;
            if (score < 40) {
                label = 'Çok Zayıf';
                color = 'from-red-500 to-red-600';
            } else if (score < 60) {
                label = 'Zayıf';
                color = 'from-orange-500 to-orange-600';
            } else if (score < 80) {
                label = 'Orta';
                color = 'from-yellow-500 to-yellow-600';
            } else if (score < 100) {
                label = 'Güçlü';
                color = 'from-green-500 to-green-600';
            } else {
                label = 'Çok Güçlü';
                color = 'from-emerald-500 to-emerald-600';
            }

            setStrength({ score, label, color, feedback });
        };

        return (
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
                <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">🔒</span>
                        <h3 className="text-2xl font-bold text-gray-800">Şifre Gücü Test Cihazı</h3>
                    </div>
                    <p className="text-gray-600">
                        ⚠️ <strong>Önemli:</strong> Gerçek şifrenizi girmeyin! Test için örnek bir şifre oluşturun.
                    </p>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Test Şifresi:
                    </label>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Örnek bir şifre yazın..."
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-mono"
                    />
                </div>

                {password && (
                    <div className="space-y-4">
                        <div className="bg-gray-100 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold text-gray-700">Güç:</span>
                                <span className={`font-bold text-lg bg-gradient-to-r ${strength.color} bg-clip-text text-transparent`}>
                                    {strength.label}
                                </span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                                <div
                                    className={`h-4 bg-gradient-to-r ${strength.color} rounded-full transition-all duration-500`}
                                    style={{ width: `${strength.score}%` }}
                                ></div>
                            </div>
                            <div className="text-right text-sm text-gray-600 mt-1">
                                %{strength.score}
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span>💡</span> Değerlendirme:
                            </h4>
                            <ul className="space-y-2">
                                {strength.feedback.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-700">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                            <h4 className="font-semibold text-green-800 mb-2">
                                🎯 Güçlü Şifre İpuçları:
                            </h4>
                            <ul className="text-sm text-green-700 space-y-1 list-disc list-inside">
                                <li>En az 12 karakter kullan</li>
                                <li>Büyük harf, küçük harf, rakam ve sembol karıştır</li>
                                <li>Doğum tarihi, isim gibi kişisel bilgiler kullanma</li>
                                <li>Her hesap için farklı şifre kullan</li>
                                <li>Şifrelerini kimseyle paylaşma</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // 2. NETWORK SIMULATOR - BT.5.3 için
    function NetworkSimulator() {
        const [devices, setDevices] = useState([
            { id: 'computer1', name: 'Bilgisayar 1', type: 'computer', x: 100, y: 100, connected: false },
            { id: 'computer2', name: 'Bilgisayar 2', type: 'computer', x: 400, y: 100, connected: false },
            { id: 'router', name: 'Router', type: 'router', x: 250, y: 250, connected: false }
        ]);
        const [connections, setConnections] = useState([]);
        const [selectedDevice, setSelectedDevice] = useState(null);
        const [feedback, setFeedback] = useState('');

        const connectDevices = (device1Id, device2Id) => {
            const newConnection = { from: device1Id, to: device2Id };
            const exists = connections.some(
                c => (c.from === device1Id && c.to === device2Id) ||
                    (c.from === device2Id && c.to === device1Id)
            );

            if (!exists) {
                setConnections([...connections, newConnection]);
                setDevices(devices.map(d =>
                    d.id === device1Id || d.id === device2Id
                        ? { ...d, connected: true }
                        : d
                ));
                setFeedback('✅ Cihazlar başarıyla bağlandı!');
            } else {
                setFeedback('⚠️ Bu cihazlar zaten bağlı!');
            }
        };

        const handleDeviceClick = (deviceId) => {
            if (!selectedDevice) {
                setSelectedDevice(deviceId);
                setFeedback(`🔵 ${devices.find(d => d.id === deviceId).name} seçildi. Bağlamak için başka bir cihaz seç.`);
            } else if (selectedDevice === deviceId) {
                setSelectedDevice(null);
                setFeedback('Seçim iptal edildi.');
            } else {
                connectDevices(selectedDevice, deviceId);
                setSelectedDevice(null);
            }
        };

        const resetNetwork = () => {
            setConnections([]);
            setDevices(devices.map(d => ({ ...d, connected: false })));
            setSelectedDevice(null);
            setFeedback('Ağ sıfırlandı.');
        };

        const checkTopology = () => {
            if (connections.length >= 2) {
                const hasRouter = connections.some(c => c.from === 'router' || c.to === 'router');
                if (hasRouter) {
                    setFeedback('🎉 Harika! Doğru bir LAN (Yerel Alan Ağı) topolojisi oluşturdun! Router tüm cihazları birbirine bağlıyor.');
                } else {
                    setFeedback('💡 İyi başlangıç! Router\'ı da bağlarsan daha güçlü bir ağ olur.');
                }
            } else {
                setFeedback('⚠️ Daha fazla cihaz bağla. En az 2 bağlantı gerekli.');
            }
        };

        const deviceIcons = {
            computer: '🖥️',
            router: '📡'
        };

        return (
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
                <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">🌐</span>
                        <h3 className="text-2xl font-bold text-gray-800">Ağ Simülatörü</h3>
                    </div>
                    <p className="text-gray-600">
                        Cihazlara tıklayarak onları birbirine bağlayın ve bir ağ oluşturun!
                    </p>
                </div>

                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 mb-6 h-96 border-2 border-blue-200">
                    {/* Bağlantıları çiz */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        {connections.map((conn, idx) => {
                            const fromDevice = devices.find(d => d.id === conn.from);
                            const toDevice = devices.find(d => d.id === conn.to);
                            if (!fromDevice || !toDevice) return null;

                            return (
                                <line
                                    key={idx}
                                    x1={fromDevice.x + 30}
                                    y1={fromDevice.y + 30}
                                    x2={toDevice.x + 30}
                                    y2={toDevice.y + 30}
                                    stroke="#3B82F6"
                                    strokeWidth="3"
                                    strokeDasharray="5,5"
                                />
                            );
                        })}
                    </svg>

                    {/* Cihazlar */}
                    {devices.map(device => (
                        <div
                            key={device.id}
                            onClick={() => handleDeviceClick(device.id)}
                            className={`absolute cursor-pointer transition-all duration-200 ${selectedDevice === device.id
                                    ? 'ring-4 ring-blue-500 scale-110'
                                    : device.connected
                                        ? 'ring-2 ring-green-500'
                                        : 'hover:scale-105'
                                }`}
                            style={{ left: device.x, top: device.y }}
                        >
                            <div className="bg-white rounded-xl shadow-lg p-4 w-24 text-center">
                                <div className="text-4xl mb-2">{deviceIcons[device.type]}</div>
                                <div className="text-xs font-semibold text-gray-700">{device.name}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {feedback && (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
                        <p className="text-blue-800">{feedback}</p>
                    </div>
                )}

                <div className="flex gap-4">
                    <button
                        onClick={checkTopology}
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        ✅ Ağımı Kontrol Et
                    </button>
                    <button
                        onClick={resetNetwork}
                        className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        🔄 Sıfırla
                    </button>
                </div>

                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <h4 className="font-semibold text-yellow-800 mb-2">📚 Bilgi:</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                        <li><strong>LAN (Yerel Alan Ağı):</strong> Ev veya okulunuzdaki gibi küçük bir alandaki ağ.</li>
                        <li><strong>Router:</strong> Cihazları birbirine bağlar ve internete erişim sağlar.</li>
                        <li><strong>WAN (Geniş Alan Ağı):</strong> Şehirleri, ülkeleri birbirine bağlayan büyük ağlar.</li>
                    </ul>
                </div>
            </div>
        );
    }

    // 3. BLOCKLY CODE EDITOR - BT.5.5 için
    function BlocklyCodeEditor() {
        const workspaceRef = useRef(null);
        const [output, setOutput] = useState([]);
        const [workspace, setWorkspace] = useState(null);

        useEffect(() => {
            // Blockly workspace oluştur
            if (window.Blockly && workspaceRef.current && !workspace) {
                const ws = window.Blockly.inject(workspaceRef.current, {
                    toolbox: `
                        <xml>
                            <category name="Hareket" colour="230">
                                <block type="move_forward"></block>
                                <block type="turn_right"></block>
                                <block type="turn_left"></block>
                            </category>
                            <category name="Döngüler" colour="120">
                                <block type="controls_repeat_ext">
                                    <value name="TIMES">
                                        <shadow type="math_number">
                                            <field name="NUM">4</field>
                                        </shadow>
                                    </value>
                                </block>
                            </category>
                            <category name="Mantık" colour="210">
                                <block type="controls_if"></block>
                            </category>
                        </xml>
                    `,
                    grid: { spacing: 20, length: 3, colour: '#ccc', snap: true },
                    zoom: { controls: true, wheel: true, startScale: 1.0 }
                });

                // Özel bloklar tanımla
                window.Blockly.Blocks['move_forward'] = {
                    init: function () {
                        this.appendDummyInput()
                            .appendField("İleri Git");
                        this.setPreviousStatement(true, null);
                        this.setNextStatement(true, null);
                        this.setColour(230);
                        this.setTooltip("Karakteri bir adım ileri götürür");
                    }
                };

                window.Blockly.Blocks['turn_right'] = {
                    init: function () {
                        this.appendDummyInput()
                            .appendField("Sağa Dön");
                        this.setPreviousStatement(true, null);
                        this.setNextStatement(true, null);
                        this.setColour(230);
                        this.setTooltip("Karakteri sağa çevirir");
                    }
                };

                window.Blockly.Blocks['turn_left'] = {
                    init: function () {
                        this.appendDummyInput()
                            .appendField("Sola Dön");
                        this.setPreviousStatement(true, null);
                        this.setNextStatement(true, null);
                        this.setColour(230);
                        this.setTooltip("Karakteri sola çevirir");
                    }
                };

                setWorkspace(ws);
            }
        }, []);

        const runCode = () => {
            if (!workspace) return;

            const code = window.Blockly.JavaScript.workspaceToCode(workspace);
            const logs = [];

            // Basit kod yorumlayıcı
            const blocks = workspace.getTopBlocks();
            blocks.forEach(block => {
                executeBlock(block, logs);
            });

            setOutput(logs.length > 0 ? logs : ['Kod çalıştırıldı! 🎉']);
        };

        const executeBlock = (block, logs) => {
            if (!block) return;

            const type = block.type;

            if (type === 'move_forward') {
                logs.push('➡️ İleri gitti');
            } else if (type === 'turn_right') {
                logs.push('↪️ Sağa döndü');
            } else if (type === 'turn_left') {
                logs.push('↩️ Sola döndü');
            } else if (type === 'controls_repeat_ext') {
                const times = block.getField Count Value('TIMES') || 1;
                const childBlock = block.getInputTargetBlock('DO');
                for (let i = 0; i < times; i++) {
                    logs.push(`🔁 Tekrar ${i + 1}/${times}`);
                    if (childBlock) {
                        executeBlock(childBlock, logs);
                    }
                }
            }

            const nextBlock = block.getNextBlock();
            if (nextBlock) {
                executeBlock(nextBlock, logs);
            }
        };

        const clearWorkspace = () => {
            if (workspace) {
                workspace.clear();
                setOutput([]);
            }
        };

        return (
            <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
                <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">🧮</span>
                        <h3 className="text-2xl font-bold text-gray-800">Blok Tabanlı Kod Editörü</h3>
                    </div>
                    <p className="text-gray-600">
                        Sol taraftaki blokları sürükle-bırak yaparak kendi programını oluştur!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div
                            ref={workspaceRef}
                            className="border-2 border-gray-300 rounded-lg"
                            style={{ height: '500px' }}
                        ></div>

                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={runCode}
                                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                ▶️ Çalıştır
                            </button>
                            <button
                                onClick={clearWorkspace}
                                className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                🗑️ Temizle
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm h-[500px] overflow-y-auto">
                            <div className="mb-2 text-gray-400">📟 Çıktı:</div>
                            {output.length > 0 ? (
                                output.map((line, idx) => (
                                    <div key={idx} className="mb-1">{line}</div>
                                ))
                            ) : (
                                <div className="text-gray-500 italic">Kodu çalıştırdığında burada sonuçları göreceksin...</div>
                            )}
                        </div>

                        <div className="mt-4 bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
                            <h4 className="font-semibold text-indigo-800 mb-2">💡 İpuçları:</h4>
                            <ul className="text-sm text-indigo-700 space-y-1 list-disc list-inside">
                                <li>Blokları birbirine ekle</li>
                                <li>Döngülerle kodu kısalt</li>
                                <li>Çalıştır'a bas ve sonucu gör</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return {
        PasswordStrengthTester,
        NetworkSimulator,
        BlocklyCodeEditor
    };
})();
