// Derinlemesine Modüler İçerik - BT.5.1 - Bilişim Teknolojileri
const deepContent_BT51 = {
    id: 'bt-5-1',
    title: 'Bilişim Teknolojileri',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
    description: 'Bilgi ve iletişim teknolojileri, bilgisayar sistemleri ve dosya yönetimi',

    modules: [
        {
            id: 'bt51-m1',
            title: 'Bilgisayar Bileşenleri',
            icon: '🖥️',
            duration: '15 dakika',
            type: 'interactive',
            content: {
                theory: `**Bilgisayar nasıl çalışır?**

Bilgisayar, birlikte çalışan birçok bileşenden oluşur. Her bileşen önemli bir görev yapar.

**Temel Bileşenler:**

**1. İşlemci (CPU - Central Processing Unit)**
- Bilgisayarın "beyni"
- Tüm hesaplamaları yapar
- Hız: GHz (Gigahertz) ile ölçülür
- Örnek: 3.5 GHz işlemci, saniyede 3.5 milyar işlem yapabilir!

**2. Bellek (RAM - Random Access Memory)**
- Geçici hafıza  
- Çalışan programları saklar
- Hızlı erişim sağlar
- Bilgisayar kapanınca silinir
- Ölçü birimi: GB (Gigabyte)

**3. Sabit Disk (HDD/SSD)**
- Kalıcı depolama
- Dosyalar, fotoğraflar, programlar burada
- HDD: Mekanik, yavaş ama ucuz
- SSD: Elektronik, çok hızlı ama pahalı

**4. Anakart (Motherboard)**
- Tüm parçaları birbirine bağlar
- "Ana merkez" gibidir

**5. Ekran Kartı (GPU)**
- Görüntüleri işler
- Oyunlar ve grafikler için önemli

**Nasıl Çalışırlar Birlikte?**
1. Klavyeden tuşa basıyorsun
2. Anakart sinyali alıyor
3. CPU işliyor
4. RAM'de geçici saklanıyor
5. Ekranda görüntüleniyor!`,

                interactive: {
                    type: 'clickable-diagram',
                    description: 'Aşağıdaki bilgisayar üzerinde parçalara tıklayarak detayları keşfedin',
                    components: [
                        {
                            name: 'CPU',
                            description: 'İşlemci - Bilgisayarın beyni, tüm hesaplamaları yapar',
                            funFact: '💡 Modern işlemciler saniyede MİLYARLARCA işlem yapabilir!'
                        },
                        {
                            name: 'RAM',
                            description: 'Geçici bellek - Çalışan programları saklar',
                            funFact: '💡 RAM dolu olursa bilgisayar yavaşlar!'
                        },
                        {
                            name: 'Hard Drive',
                            description: 'Sabit disk - Dosyalarınızı kalıcı saklar',
                            funFact: '💡 1 TB disk = yaklaşık 250,000 fotoğraf!'
                        },
                        {
                            name: 'GPU',
                            description: 'Ekran kartı - Grafikleri işler',
                            funFact: '💡 Oyun bilgisayarlarında en pahalı parça GPU olabilir!'
                        }
                    ]
                },

                keyPoints: [
                    'CPU: Beyindir, hesaplar',
                    'RAM: Geçici hafıza',
                    'Disk: Kalıcı depolama',
                    'GPU: Görselleri işler',
                    'Anakart: Hepsini birleştirir'
                ]
            },

            quiz: [
                {
                    question: 'İşlemcinin bir diğer adı nedir?',
                    options: ['GPU', 'CPU', 'RAM', 'HDD'],
                    correct: 1,
                    explanation: 'CPU (Central Processing Unit) işlemcinin kısaltmasıdır.'
                },
                {
                    question: 'Hangi bellek türü bilgisayar kapandığında verilerini kaybeder?',
                    options: ['HDD', 'SSD', 'RAM', 'Sabit Disk'],
                    correct: 2,
                    explanation: 'RAM geçici bellektir, elektrik gittiğinde içindeki veriler silinir.'
                }
            ]
        },

        {
            id: 'bt51-m2',
            title: 'Dosya Yönetimi',
            icon: '📁',
            duration: '20 dakika',
            type: 'simulation',
            content: {
                theory: `**Dosya ve Klasör Sistemi**

Bilgisayarda dosyalarımızı düzenli tutmak çok önemlidir!

**Dosya Nedir?**
- Bilgisayarda saklanan herhangi bir veri
- Örnekler: Fotoğraf (.jpg), Video (.mp4), Belge (.docx)

**Klasör (Dizin) Nedir?**
- Dosyaların saklandığı kutu
- İçinde hem dosya hem başka klasörler olabilir

**Temel İşlemler:**

**1. Oluşturma**
- Sağ Tık → Yeni → Klasör
- İsim ver, Enter

**2. Kopyalama**
- Seç → Sağ Tık → Kopyala (veya Ctrl+C)
- Gideceği yere → Yapıştır (Ctrl+V)

**3. Taşıma**
- Seç → Sağ Tık → Kes (Ctrl+X)
- Yeni yere → Yapıştır (Ctrl+V)

**4. Silme**
- Seç → Delete tuşu
- Çöp kutusuna gider
- Geri almak: Çöp kutusundan "Geri Al"

**Klavye Kısayolları:**
- Ctrl+C: Kopyala
- Ctrl+X: Kes
- Ctrl+V: Yapıştır
- Ctrl+Z: Geri al
- F2: Yeniden adlandır
- Delete: Sil

**Düzenli Dosya Sistemi Örneği:**
\`\`\`
📁 Belgelerim
  ├── 📁 Okul
  │   ├── 📁 Matematik
  │   ├── 📁 Bilişim
  │   └── 📁 Türkçe
  ├── 📁 Fotoğraflar
  │   ├── 📁 Aile
  │   └── 📁 Tatil
  └── 📁 Projeler
\`\`\``,

                interactive: {
                    type: 'file-system-simulator',
                    description: 'Sanal dosya sistemi ile pratik yapın',
                    tasks: [
                        {
                            id: 1,
                            title: 'Klasör Oluştur',
                            description: '"Okul Projeleri" adında bir klasör oluşturun',
                            points: 10
                        },
                        {
                            id: 2,
                            title: 'Dosya Kopyala',
                            description: '"odev.docx" dosyasını "Odevler" klasörüne kopyalayın',
                            points: 15
                        },
                        {
                            id: 3,
                            title: 'Düzenle',
                            description: 'En az 3 klasörlü bir organizasyon yapısı oluşturun',
                            points: 20
                        }
                    ]
                },

                keyPoints: [
                    'Dosya: Tek bir veri (ör: resim.jpg)',
                    'Klasör: Dosyaların saklandığı yer',
                    'Ctrl+C/V: Kopyala/Yapıştır',
                    'Düzenli sistem = kolay bulma'
                ]
            },

            quiz: [
                {
                    question: 'Bir dosyayı kopyalamak için hangi kısayol kullanılır?',
                    options: ['Ctrl+X', 'Ctrl+C', 'Ctrl+V', 'Ctrl+Z'],
                    correct: 1,
                    explanation: 'Ctrl+C kopyalama, Ctrl+V yapıştırma için kullanılır.'
                }
            ]
        },

        {
            id: 'bt51-m3',
            title: 'Bit ve Byte - Veri Ölçüleri',
            icon: '💾',
            duration: '15 dakika',
            type: 'calculator',
            content: {
                theory: `**Bilgisayar Verileri Nasıl Ölçer?**

Bilgisayarlar sadece 0 ve 1'leri anlar!

**Bit (Binary Digit)**
- En küçük veri birimi
- Sadece 2 değer: 0 veya 1

**Byte**
- 1 Byte = 8 Bit
- 1 karakter = 1 byte
- Örnek: "A" harfi = 1 byte

**Daha Büyük Birimler:**

| Birim | Kısaltma | Değer | Örnek |
|-------|----------|-------|-------|
| Byte | B | 1 byte | 1 harf |
| Kilobyte | KB | 1,024 byte | Kısa metin |
| Megabyte | MB | 1,024 KB | Fotoğraf |
| Gigabyte | GB | 1,024 MB | Film |
| Terabyte | TB | 1,024 GB | Binlerce film |

**Gerçek Örnekler:**
- 📝 1 sayfa metin: ~2 KB
- 📸 Fotoğraf: ~3-5 MB
- 🎵 Şarkı (MP3): ~5 MB
- 🎬 Film (HD): ~4-8 GB
- 🎮 Oyun: ~50-100 GB

**Hesaplama:**
- 1 KB = 1,024 Byte (tam olarak 1000 değil!)
- 5 MB fotoğraf = 5 × 1024 = 5,120 KB
- 2 GB film = 2 × 1024 = 2,048 MB`,

                interactive: {
                    type: 'unit-converter',
                    description: 'Veri birimlerini dönüştürün',
                    conversions: [
                        'Byte ↔ KB',
                        'KB ↔ MB',
                        'MB ↔ GB',
                        'GB ↔ TB'
                    ]
                },

                keyPoints: [
                    '1 Byte = 8 Bit',
                    '1 KB = 1,024 Byte',
                    '1 MB = 1,024 KB',
                    '1 GB = 1,024 MB',
                    'Fotoğraf ≈ MB, Film ≈ GB'
                ]
            },

            quiz: [
                {
                    question: '1 Kilobyte (KB) kaç Byte\'tır?',
                    options: ['100 Byte', '1000 Byte', '1024 Byte', '1048 Byte'],
                    correct: 2,
                    explanation: '1 KB = 1024 Byte (2^10)'
                },
                {
                    question: 'Ortalama bir fotoğraf hangi birimle ölçülür?',
                    options: ['Byte', 'KB', 'MB', 'GB'],
                    correct: 2,
                    explanation: 'Fotoğraflar genellikle 3-5 MB civarındadır.'
                }
            ]
        }
    ],

    // Ünite sonu değerlendirme
    finalQuiz: [
        {
            question: 'Bilgisayarın "beyni" olarak adlandırılan bileşen hangisidir?',
            options: ['RAM', 'CPU', 'HDD', 'GPU'],
            correct: 1,
            explanation: 'CPU (İşlemci), tüm hesaplamaları yapan ve bilgisayarı yöneten "beyin" gibidir.'
        },
        {
            question: 'Hangi bellek türü verileri kalıcı olarak saklar?',
            options: ['RAM', 'Cache', 'Sabit Disk (HDD/SSD)', 'Register'],
            correct: 2,
            explanation: 'Sabit disk (HDD veya SSD) bilgisayar kapalıyken bile verileri saklar.'
        },
        {
            question: 'Bir dosyayı kesmek için kullanılan klavye kısayolu hangisidir?',
            options: ['Ctrl+C', 'Ctrl+V', 'Ctrl+X', 'Ctrl+Z'],
            correct: 2,
            explanation: 'Ctrl+X kes, Ctrl+C kopyala, Ctrl+V yapıştır komutlarıdır.'
        },
        {
            question: '1 GB (Gigabyte) kaç MB (Megabyte)\'tır?',
            options: ['100 MB', '512 MB', '1000 MB', '1024 MB'],
            correct: 3,
            explanation: '1 GB = 1024 MB'
        },
        {
            question: 'Görüntü ve grafik işlemlerinden hangi donanım sorumludur?',
            options: ['CPU', 'RAM', 'GPU (Ekran Kartı)', 'Anakart'],
            correct: 2,
            explanation: 'GPU (Graphics Processing Unit - Ekran Kartı) görsel işlemleri yapar.'
        }
    ]
};
