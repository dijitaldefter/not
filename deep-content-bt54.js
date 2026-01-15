// Derinlemesine Modüler İçerik - BT.5.4 - Ürün Oluşturma
const deepContent_BT54 = {
    id: 'bt-5-4',
    title: 'Ürün Oluşturma',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500',
    description: 'Dijital ürün oluşturma, kelime işlemci, sunu hazırlama',

    modules: [
        {
            id: 'bt54-m1',
            title: 'Kelime İşlemci (Word/Docs)',
            icon: '📝',
            duration: '20 dakika',
            type: 'interactive',
            content: {
                theory: `**Kelime İşlemci Nedir?**
Bilgisayarda yazı yazmak, düzenlemek ve kaydetmek için kullanılan programlardır.
- Örnekler: Microsoft Word, Google Docs, LibreOffice Writer.

**Temel İşlemler:**
1. **Biçimlendirme:** Yazının tipini, rengini, boyutunu değiştirme.
   - **K (B):** Kalın (Bold) - Önemli yerleri vurgular.
   - *T (I):* İtalik (Eğik) - Yabancı kelimeler veya vurgu için.
   - <u>A (U):</u> Altı Çizili - Başlıklar için.

2. **Hizalama:**
   - Sola Yasla: Standart yazı.
   - Ortala: Başlıklar için.
   - Sağa Yasla: Tarih veya imza için.
   - İki Yana Yasla: Kitap gibi düzgün kenarlar için.

3. **Listeleme:**
   - Madde işaretleri (•)
   - Numaralandırma (1. 2. 3.)

**Klavye Kısayolları (Hayat Kurtarır!):**
- **Ctrl + B:** Kalın yap
- **Ctrl + I:** İtalik yap
- **Ctrl + U:** Altını çiz
- **Ctrl + Z:** Geri al (Hata yaparsan korkma!)
- **Ctrl + S:** Kaydet (Sık sık yap!)`,

                interactive: {
                    type: 'text-formatter',
                    description: 'Aşağıdaki metni istenen özelliklere göre biçimlendirin.',
                    tasks: [
                        { text: 'Bu başlık ortalanmalı ve kalın olmalı', style: { bold: true, align: 'center' } },
                        { text: 'Bu kelime italik olmalı', target: 'italik', style: { italic: true } }
                    ]
                },

                keyPoints: [
                    'Yazılarını sık sık kaydet (Ctrl+S).',
                    'Başlıkları belirgin yap.',
                    'Okunabilir yazı tipleri seç (Arial, Calibri).',
                    'Hata yaparsan Ctrl+Z ile geri al.'
                ]
            },

            quiz: [
                {
                    question: 'Bir metni kalın (bold) yapmak için hangi kısayol kullanılır?',
                    options: ['Ctrl + C', 'Ctrl + B', 'Ctrl + V', 'Ctrl + P'],
                    correct: 1,
                    explanation: 'Bold (Kalın) kelimesinin baş harfi B\'den gelir.'
                },
                {
                    question: 'Yanlışlıkla sildiğiniz bir yazıyı geri getirmek için ne yaparsınız?',
                    options: ['Bilgisayarı kapatırım', 'Ağlarım', 'Ctrl + Z (Geri Al) yaparım', 'Ekranı silerim'],
                    correct: 2,
                    explanation: 'Ctrl + Z son yapılan işlemi geri alır.'
                }
            ]
        },

        {
            id: 'bt54-m2',
            title: 'Sunum Hazırlama',
            icon: '📊',
            duration: '20 dakika',
            type: 'simulation',
            content: {
                theory: `**Etkili Sunum Nasıl Olur?**
Sunum, bir konuyu dinleyicilere anlatmaktır. Slaytlar sadece yardımcıdır.

**Sunum İlkeleri:**
1. **Az Yazı, Çok Görsel:** İnsanlar okumak için değil, seni dinlemek için oradalar. Slayta roman yazma!
2. **Büyük Yazı Tipi:** En arka sıradaki kişi bile okuyabilmeli (En az 24 punto).
3. **Kontrast Renkler:** Koyu arka plana açık yazı, açık arka plana koyu yazı.
4. **Göz Teması:** Slayta değil, dinleyicilere bak.

**Slayt Düzeni:**
- **Kapak Slaydı:** Konu başlığı ve adın.
- **İçerik:** Konunun anlatıldığı slaytlar.
- **Görseller:** Konuyla ilgili resimler, grafikler.
- **Kapanış:** Teşekkür ve sorular.

**Animasyonlar:**
- Çok fazla ve karışık animasyon kullanma, dikkat dağıtır.
- Basit geçişler tercih et.`,

                interactive: {
                    type: 'presentation-review',
                    description: 'Hatalı hazırlanmış bir slaytı düzeltin.',
                    mistakes: [
                        'Çok küçük yazı',
                        'Okunmayan renk (Sarı üzerine beyaz)',
                        'Çok fazla metin (Paragraf dolusu)'
                    ],
                    corrections: [
                        'Yazıyı büyüt',
                        'Rengi koyulaştır',
                        'Metni maddelere böl'
                    ]
                },

                keyPoints: [
                    'Slaytlar senin not defterin değildir.',
                    'Görsel kullanmaktan çekinme.',
                    'Sade ve anlaşılır ol.',
                    'Sunumdan önce prova yap.'
                ]
            },

            quiz: [
                {
                    question: 'Sunum hazırlarken hangisi YANLIŞTIR?',
                    options: ['Bol bol görsel kullanmak', 'Yazıları büyük yazmak', 'Slayta upuzun paragraflar yazıp okumak', 'Renk uyumuna dikkat etmek'],
                    correct: 2,
                    explanation: 'Slaytlar özet bilgi içermelidir, kitaptan okur gibi okunmamalıdır.'
                }
            ]
        },

        {
            id: 'bt54-m3',
            title: 'Görsel İşleme',
            icon: '🖼️',
            duration: '15 dakika',
            type: 'interactive',
            content: {
                theory: `**Görsel Dosya Türleri:**
- **JPG/JPEG:** Fotoğraflar için en yaygın format. Sıkıştırılmıştır.
- **PNG:** Arka planı şeffaf olabilir. Kalitelidir.
- **GIF:** Hareketli resimler.

**Telif Hakları (Önemli!):**
İnternetteki her resmi kafamıza göre kullanamayız.
- **Creative Commons (CC):** Ücretsiz kullanılabilen görseller.
- **Stok Fotoğraf Siteleri:** Pexels, Unsplash, Pixabay (Buradan ücretsiz ve yasal resim bulabilirsin).

**Temel Düzenleme İşlemleri:**
- **Kırpma (Crop):** Resmin fazlalıklarını kesme.
- **Yeniden Boyutlandırma:** Resmi küçültme veya büyütme.
- **Döndürme:** Yan duran resmi düzeltme.`,

                interactive: {
                    type: 'image-editor-sim',
                    description: 'Basit görsel düzenleme işlemlerini deneyin.',
                    tools: ['Kırp', 'Döndür', 'Filtrele']
                },

                keyPoints: [
                    'Doğru formatı seç (Fotoğraf için JPG, Çizim için PNG).',
                    'Telif hakkı olmayan görseller kullan.',
                    'Resimlerin boyutuna dikkat et (Çok büyükse sunumu yavaşlatır).'
                ]
            },

            quiz: [
                {
                    question: 'Arka planı şeffaf olan bir logo kaydetmek için hangi format uygundur?',
                    options: ['JPG', 'PNG', 'MP3', 'TXT'],
                    correct: 1,
                    explanation: 'PNG formatı şeffaflığı (transparanlığı) destekler.'
                }
            ]
        }
    ],

    finalQuiz: [
        {
            question: 'Kelime işlemci programında "İtalik" ne demektir?',
            options: ['Kalın yazı', 'Altı çizili yazı', 'Eğik yazı', 'Renkli yazı'],
            correct: 2,
            explanation: 'İtalik yazı tipi sağa doğru hafifçe eğiktir.'
        },
        {
            question: 'Bir sunumda yazı boyutu en az kaç olmalıdır?',
            options: ['8 punto', '12 punto', '24 punto', '100 punto'],
            correct: 2,
            explanation: 'Okunabilirlik için sunumlarda en az 24 punto önerilir.'
        },
        {
            question: 'Ctrl + S kısayolu ne işe yarar?',
            options: ['Siler', 'Saklar (Kaydeder)', 'Sıralar', 'Seçer'],
            correct: 1,
            explanation: 'Save (Kaydet) kelimesinin baş harfi S\'den gelir.'
        }
    ]
};
