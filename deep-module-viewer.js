// Deep Module Viewer - Derin modüler içerikleri görüntüleyen component
// Tüm deep-content-bt5X.js dosyalarındaki modülleri render eder

const DeepModuleViewer = (() => {
    const { useState } = React;

    function ModuleList({ topic, onSelectModule }) {
        // Deep content verilerini yükle
        const deepContentMap = {
            'bt-5-1': window.deepContent_BT51,
            'bt-5-2': window.deepContent_BT52,
            'bt-5-3': window.deepContent_BT53,
            'bt-5-4': window.deepContent_BT54,
            'bt-5-5': window.deepContent_BT55
        };

        const deepContent = deepContentMap[topic.id];

        if (!deepContent || !deepContent.modules) {
            return (
                <div className="text-center py-12">
                    <p className="text-gray-500">Bu ünite için henüz derin içerik modülleri yüklenmemiş.</p>
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deepContent.modules.map((module, index) => (
                    <button
                        key={module.id}
                        onClick={() => onSelectModule(module)}
                        className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-left overflow-hidden relative"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-5xl">{module.icon}</span>
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold">
                                    {module.duration}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900">
                                {module.title}
                            </h3>

                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${module.type === 'interactive' ? 'bg-green-100 text-green-700' :
                                        module.type === 'simulation' ? 'bg-purple-100 text-purple-700' :
                                            'bg-blue-100 text-blue-700'
                                    }`}>
                                    {module.type === 'interactive' ? '🎮 İnteraktif' :
                                        module.type === 'simulation' ? '🔬 Simülasyon' :
                                            '📝 Uygulama'}
                                </span>
                            </div>

                            <div className="mt-4 flex items-center text-gray-500 text-sm">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                Detayları Gör
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        );
    }

    function ModuleDetail({ module, topic, onBack }) {
        const [showQuiz, setShowQuiz] = useState(false);
        const [quizAnswers, setQuizAnswers] = useState({});
        const [quizResults, setQuizResults] = useState(null);

        // İnteraktif bileşenleri render et
        const renderInteractive = (interactive) => {
            if (!interactive) return null;

            switch (interactive.type) {
                case 'password-tester':
                    return <InteractiveTools.PasswordStrengthTester />;
                case 'network-simulator':
                    return <InteractiveTools.NetworkSimulator />;
                case 'code-editor':
                    return <InteractiveTools.BlocklyCodeEditor />;
                default:
                    return (
                        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
                            <p className="text-indigo-800 font-semibold mb-2">
                                🎯 {interactive.description}
                            </p>
                            <p className="text-indigo-600 text-sm italic">
                                İnteraktif bileşen: {interactive.type}
                            </p>
                        </div>
                    );
            }
        };

        const handleQuizAnswer = (questionIndex, answerIndex) => {
            setQuizAnswers({
                ...quizAnswers,
                [questionIndex]: answerIndex
            });
        };

        const submitQuiz = () => {
            let correct = 0;
            const results = module.quiz.map((q, idx) => {
                const isCorrect = quizAnswers[idx] === q.correct;
                if (isCorrect) correct++;
                return {
                    question: q.question,
                    userAnswer: quizAnswers[idx],
                    correctAnswer: q.correct,
                    isCorrect,
                    explanation: q.explanation
                };
            });

            setQuizResults({
                score: correct,
                total: module.quiz.length,
                percentage: Math.round((correct / module.quiz.length) * 100),
                details: results
            });
        };

        return (
            <div className="max-w-5xl mx-auto">
                <button
                    onClick={onBack}
                    className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 group"
                >
                    <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Modül Listesine Dön
                </button>

                {/* Modül Başlığı */}
                <div className={`bg-gradient-to-br ${topic.color} rounded-2xl p-8 mb-8 text-white shadow-xl`}>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-6xl">{module.icon}</span>
                        <div>
                            <h2 className="text-4xl font-bold mb-2">{module.title}</h2>
                            <div className="flex gap-4 text-sm opacity-90">
                                <span>⏱️ {module.duration}</span>
                                <span>•</span>
                                <span>📚 {topic.title}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Teorik İçerik */}
                {module.content && module.content.theory && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="text-3xl">📖</span>
                            Konu Anlatımı
                        </h3>
                        <div className="prose max-w-none text-gray-700 leading-relaxed">
                            {module.content.theory.split('\n').map((paragraph, idx) => {
                                if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                                    return (
                                        <h4 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                                            {paragraph.replace(/\*\*/g, '')}
                                        </h4>
                                    );
                                } else if (paragraph.trim().startsWith('- ')) {
                                    return (
                                        <li key={idx} className="ml-6">
                                            {paragraph.substring(2)}
                                        </li>
                                    );
                                } else if (paragraph.trim()) {
                                    return <p key={idx} className="mb-3">{paragraph}</p>;
                                }
                                return null;
                            })}
                        </div>
                    </div>
                )}

                {/* Anahtar Noktalar */}
                {module.content && module.content.keyPoints && (
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
                        <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                            <span>🔑</span> Anahtar Noktalar
                        </h4>
                        <ul className="space-y-2">
                            {module.content.keyPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-amber-800">
                                    <span className="text-amber-600 mt-1">▸</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* İnteraktif Bileşen */}
                {module.content && module.content.interactive && (
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span className="text-3xl">🎮</span>
                            İnteraktif Uygulama
                        </h3>
                        {renderInteractive(module.content.interactive)}
                    </div>
                )}

                {/* Modül Quiz */}
                {module.quiz && module.quiz.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span className="text-3xl">🧪</span>
                            Modül Testi
                        </h3>

                        {!quizResults ? (
                            <div className="space-y-6">
                                {module.quiz.map((question, qIdx) => (
                                    <div key={qIdx} className="border-2 border-gray-200 rounded-xl p-6">
                                        <p className="font-semibold text-gray-800 mb-4">
                                            {qIdx + 1}. {question.question}
                                        </p>
                                        <div className="space-y-3">
                                            {question.options.map((option, oIdx) => {
                                                const isSelected = quizAnswers[qIdx] === oIdx;
                                                return (
                                                    <button
                                                        key={oIdx}
                                                        onClick={() => handleQuizAnswer(qIdx, oIdx)}
                                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${isSelected
                                                                ? 'border-blue-500 bg-blue-50 font-semibold'
                                                                : 'border-gray-200 hover:border-gray-300 bg-gray-50 hover:bg-gray-100'
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                                                                }`}>
                                                                {isSelected && <div className="w-3 h-3 rounded-full bg-white"></div>}
                                                            </div>
                                                            <span>{option}</span>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}

                                <button
                                    onClick={submitQuiz}
                                    disabled={Object.keys(quizAnswers).length < module.quiz.length}
                                    className={`w-full font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 ${Object.keys(quizAnswers).length < module.quiz.length
                                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            : `bg-gradient-to-r ${topic.color} text-white hover:shadow-xl transform hover:scale-105`
                                        }`}
                                >
                                    {Object.keys(quizAnswers).length < module.quiz.length
                                        ? `Tüm Soruları Cevaplayın (${Object.keys(quizAnswers).length}/${module.quiz.length})`
                                        : 'Sonuçları Gör →'}
                                </button>
                            </div>
                        ) : (
                            <div>
                                <div className={`rounded-xl p-8 mb-6 text-center ${quizResults.percentage >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                        quizResults.percentage >= 60 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                                            'bg-gradient-to-r from-orange-500 to-red-500'
                                    } text-white`}>
                                    <div className="text-6xl mb-4">
                                        {quizResults.percentage >= 80 ? '🎉' :
                                            quizResults.percentage >= 60 ? '👍' : '📚'}
                                    </div>
                                    <h4 className="text-3xl font-bold mb-2">
                                        {quizResults.percentage >= 80 ? 'Harika!' :
                                            quizResults.percentage >= 60 ? 'İyi İş!' : 'Tekrar Dene!'}
                                    </h4>
                                    <div className="text-5xl font-bold">
                                        {quizResults.score}/{quizResults.total}
                                    </div>
                                    <div className="text-2xl opacity-90">
                                        %{quizResults.percentage}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    {quizResults.details.map((result, idx) => (
                                        <div
                                            key={idx}
                                            className={`p-4 rounded-lg border-2 ${result.isCorrect
                                                    ? 'border-green-500 bg-green-50'
                                                    : 'border-red-500 bg-red-50'
                                                }`}
                                        >
                                            <div className="flex items-start gap-2">
                                                <span className={`text-2xl ${result.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                                    {result.isCorrect ? '✓' : '✗'}
                                                </span>
                                                <div className="flex-1">
                                                    <p className="font-semibold text-gray-800 mb-2">
                                                        {result.question}
                                                    </p>
                                                    <p className={`text-sm mb-1 ${result.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                                        {result.explanation}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => {
                                        setQuizAnswers({});
                                        setQuizResults(null);
                                    }}
                                    className={`w-full bg-gradient-to-r ${topic.color} text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                                >
                                    🔄 Tekrar Dene
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }

    function DeepContentViewer({ topic, onBack }) {
        const [selectedModule, setSelectedModule] = useState(null);

        if (selectedModule) {
            return (
                <ModuleDetail
                    module={selectedModule}
                    topic={topic}
                    onBack={() => setSelectedModule(null)}
                />
            );
        }

        return (
            <div>
                <button
                    onClick={onBack}
                    className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 group"
                >
                    <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Konu Detayına Dön
                </button>

                <div className={`bg-gradient-to-br ${topic.color} rounded-2xl p-8 mb-8 text-white shadow-xl`}>
                    <div className="flex items-center gap-4">
                        <span className="text-6xl">{topic.icon}</span>
                        <div>
                            <h2 className="text-4xl font-bold mb-2">Derin İçerik Modülleri</h2>
                            <p className="text-lg opacity-90">{topic.title}</p>
                        </div>
                    </div>
                </div>

                <ModuleList topic={topic} onSelectModule={setSelectedModule} />
            </div>
        );
    }

    return DeepContentViewer;
})();
