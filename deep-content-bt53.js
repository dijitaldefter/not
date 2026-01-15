// Derinlemesine Modüler İçerik - BT.5.3 - İletişim, Araştırma ve İş Birliği
const deepContent_BT53 = {
    id: 'bt-5-3',
    title: 'İletişim, Araştırma ve İş Birliği',
    icon: '🌐',
    color: 'from-green-500 to-emerald-500',
    description: 'Bilgisayar ağları, internet, araştırma ve iletişim teknolojileri',

    modules: [
        {
            id: 'bt53-m1',
            title: 'Bilgisayar Ağları ve İnternet',
            icon: '🕸️',
            duration: '20 dakika',
            type: 'simulation',
            content: {
                theory: `**Bilgisayar Ağı Nedir?**
İki veya daha fazla bilgisayarın bilgi paylaşmak için birbirine bağlanmasıdır.

**Ağ Türleri:**
1. **LAN (Local Area Network - Yerel Alan Ağı):**
   - Küçük bir alandaki ağdır.
   - Örnek: Evimizdeki, okuldaki bilgisayar laboratuvarındaki ağ.
   
2. **WAN (Wide Area Network - Geniş Alan Ağı):**
   - Şehirleri, ülkeleri birbirine bağlayan çok büyük ağlardır.
   - En büyük WAN örneği **İNTERNET**tir.

**İnternete Nasıl Bağlanırız?**
- **Modem:** Telefon sinyallerini internet sinyaline çevirir.
- **Router (Yönlendirici):** İnterneti evdeki cihazlara dağıtır (Wi-Fi).
- **ISP (Servis Sağlayıcı):** Bize interneti satan şirketler (Türk Telekom, Superonline vb.).

**İnternet Adresleri (URL):**
\`https://www.meb.gov.tr\`
- **https:** İletişim kuralı (protokol)
- **www:** World Wide Web (Dünya Çapında Ağ)
- **meb:** Alan adı (Domain)
- **gov:** Uzantı (Hükümet/Devlet kurumu)
- **tr:** Ülke kodu (Türkiye)

**Yaygın Uzantılar:**
- .com: Ticari
- .org: Dernek/Organizasyon
- .edu: Üniversite/Eğitim
- .gov: Devlet
- .k12: Okul (İlkokul-Lise)`,

                interactive: {
                    type: 'network-simulator',
                    description: 'Cihazları doğru şekilde bağlayarak internete erişim sağlayın.'
                },

                keyPoints: [
                    'LAN: Küçük ağ (Ev, Okul)',
                    'WAN: Büyük ağ (Şehir, Ülke)',
                    'İnternet: Ağların ağıdır.',
                    '.gov ve .edu en güvenilir uzantılardır.'
                ]
            },

            quiz: [
                {
                    question: 'Okulumuzdaki bilgisayar laboratuvarı hangi ağ türüne örnektir?',
                    options: ['WAN', 'LAN', 'MAN', 'PAN'],
                    correct: 1,
                    explanation: 'LAN (Yerel Alan Ağı) bina içi gibi küçük alanları kapsar.'
                },
                {
                    question: 'Aşağıdaki site uzantılarından hangisi bir üniversiteye aittir?',
                    options: ['.com', '.gov', '.edu', '.org'],
                    correct: 2,
                    explanation: '.edu (education) uzantısı üniversiteler ve yüksek eğitim kurumları içindir.'
                }
            ]
        },

        {
            id: 'bt53-m2',
            title: 'Etkili Arama Stratejileri',
            icon: '🔍',
            duration: '15 dakika',
            type: 'interactive',
            content: {
                theory: `**Bilgi Okyanusunda Kaybolma!**
İnternette milyarlarca sayfa var. Aradığımızı bulmak için doğru anahtar kelimeleri kullanmalıyız.

**Arama İpuçları:**
1. **Net Olun:** "Kedi" yerine "Van kedisi özellikleri" yazın.
2. **Tırnak İşareti (" "):** Tam olarak o cümleyi arar.
   - Örnek: "İstiklal Marşı'nın kabulü"
3. **Eksi İşareti (-):** İstemediğiniz kelimeyi çıkarır.
   - Örnek: Jaguar -araba (Hayvan olan jaguarı arar, arabayı göstermez)
4. **Dosya Türü (filetype):** Sadece belirli dosyaları arar.
   - Örnek: Güneş Sistemi filetype:pdf

**Bilgi Kirliliği:**
Her bulduğumuz bilgi doğru değildir!
- Bilgiyi en az 3 farklı siteden kontrol et (Teyit et).
- Kaynağına bak (Kim yazmış? Ne zaman yazılmış?).
- .gov ve .edu sitelerine daha çok güven.`,

                interactive: {
                    type: 'search-master',
                    description: 'Doğru arama terimlerini seçerek hedefe ulaşın.',
                    tasks: [
                        {
                            goal: 'Mustafa Kemal Atatürk\'ün tam olarak "Hayatta en hakiki mürşit ilimdir" sözünü bulmak.',
                            options: [
                                { text: 'Atatürk sözleri ilim', correct: false },
                                { text: '"Hayatta en hakiki mürşit ilimdir"', correct: true, feedback: 'Tırnak işareti tam eşleşme sağlar.' }
                            ]
                        },
                        {
                            goal: 'Sadece PDF formatında sunum ödevi bulmak.',
                            options: [
                                { text: 'Küresel ısınma sunumu', correct: false },
                                { text: 'Küresel ısınma filetype:pdf', correct: true, feedback: 'filetype: komutu dosya türünü filtreler.' }
                            ]
                        }
                    ]
                },

                keyPoints: [
                    'Anahtar kelimeleri doğru seç.',
                    'Özel karakterleri (", -) kullan.',
                    'Her bilgiye hemen inanma, sorgula.',
                    'Bilgi hırsızlığı yapma, kaynak göster.'
                ]
            },

            quiz: [
                {
                    question: 'Arama motorunda "Elma -meyve" yazarsak ne buluruz?',
                    options: ['Sadece meyve olan elmaları', 'Meyve olmayan, muhtemelen teknoloji markası veya şehir olan Elma sonuçlarını', 'Elmalı kek tariflerini', 'Hiçbir şey bulamayız'],
                    correct: 1,
                    explanation: 'Eksi (-) işareti o kelimeyi sonuçlardan çıkarır. Meyve kelimesini çıkardık.'
                }
            ]
        },

        {
            id: 'bt53-m3',
            title: 'İletişim Araçları ve E-Posta',
            icon: '📧',
            duration: '15 dakika',
            type: 'interactive',
            content: {
                theory: `**Dijital İletişim**
Eskiden mektup vardı, şimdi e-posta ve anlık mesajlaşma var.

**E-Posta (Elektronik Posta):**
İnternet üzerinden gönderilen dijital mektuplardır.
- **Adres Yapısı:** kullaniciadi@servissaglayici.com
  - ornek: ali.yilmaz@gmail.com

**E-Posta Bölümleri:**
- **Kime (To):** Alıcının adresi.
- **Konu (Subject):** Mesajın ne hakkında olduğu (Çok önemli! Boş bırakma).
- **Metin:** Mesajın kendisi.
- **Ek (Attachment):** Gönderilen dosya (resim, ödev vb.).

**E-Posta Görgü Kuralları (Netiket):**
- Konu kısmını mutlaka doldur.
- Selamlamayla başla (Merhaba Öğretmenim,).
- Tamamı BÜYÜK HARFLE yazma (Bağırmak anlamına gelir!).
- İmla kurallarına dikkat et.
- Kapanış ifadesi kullan (Saygılarımla, İyi çalışmalar).`,

                interactive: {
                    type: 'email-composer',
                    description: 'Öğretmenine ödevini gönderen düzgün bir e-posta hazırla.',
                    checkList: [
                        'Alıcı adresi geçerli mi?',
                        'Konu başlığı var mı?',
                        'Selamlama var mı?',
                        'Kibar bir dil kullanılmış mı?'
                    ]
                },

                keyPoints: [
                    'E-posta resmi bir iletişim aracıdır.',
                    'Konu başlığı mesajın özetidir.',
                    'BÜYÜK HARF = BAĞIRMAK.',
                    'Tanımadığın kişilerden gelen ekleri açma.'
                ]
            },

            quiz: [
                {
                    question: 'Bir e-postada "Konu" (Subject) kısmının önemi nedir?',
                    options: ['Süs olsun diye vardır', 'Alıcının mesajın içeriğini açmadan anlamasını sağlar', 'Sadece tarih yazılır', 'Boş bırakılmalıdır'],
                    correct: 1,
                    explanation: 'Konu kısmı, alıcının e-postanın neyle ilgili olduğunu hızlıca anlamasını sağlar.'
                },
                {
                    question: 'İnternette tamamı büyük harfle yazmak ne anlama gelir?',
                    options: ['Çok önemli', 'Bağırmak / Kabalık', 'Fısıldamak', 'Mutluluk'],
                    correct: 1,
                    explanation: 'Dijital iletişimde (Netiket) tamamı büyük harf kullanımı bağırmak olarak algılanır.'
                }
            ]
        }
    ],

    finalQuiz: [
        {
            question: 'Aşağıdakilerden hangisi bir arama motorudur?',
            options: ['Windows', 'Google', 'Word', 'Paint'],
            correct: 1,
            explanation: 'Google, Bing, Yandex gibi servisler arama motorudur.'
        },
        {
            question: 'Evimizdeki interneti kablosuz olarak dağıtan cihaz hangisidir?',
            options: ['Modem/Router', 'Yazıcı', 'Tarayıcı', 'Hoparlör'],
            correct: 0,
            explanation: 'Modem ve Router (Yönlendirici) interneti kablosuz (Wi-Fi) olarak dağıtır.'
        },
        {
            question: 'Bir web sitesinin güvenilir bir devlet kurumu olduğunu nasıl anlarız?',
            options: ['.com uzantısından', '.gov uzantısından', 'Çok renkli olmasından', 'Reklamlarından'],
            correct: 1,
            explanation: '.gov uzantısı sadece devlet kurumlarına verilir.'
        }
    ]
};
