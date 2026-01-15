// Derinlemesine Modüler İçerik - BT.5.2 - Etik ve Güvenlik
const deepContent_BT52 = {
    id: 'bt-5-2',
    title: 'Etik ve Güvenlik',
    icon: '⚖️',
    color: 'from-orange-500 to-red-500',
    description: 'Bilişim etiği, dijital vatandaşlık, gizlilik ve güvenlik',

    modules: [
        {
            id: 'bt52-m1',
            title: 'Dijital Vatandaşlık ve Etik',
            icon: '🌍',
            duration: '15 dakika',
            type: 'interactive',
            content: {
                theory: `**Dijital Vatandaş Kimdir?**

Gerçek hayatta nasıl iyi bir vatandaş olmaya çalışıyorsak, internet dünyasında da (dijital dünyada) iyi bir vatandaş olmalıyız.

**Dijital Vatandaşlığın 9 Boyutu:**
1. **Dijital Erişim:** Herkesin teknolojiye eşit ulaşabilmesi.
2. **Dijital Ticaret:** İnternetten güvenli alışveriş.
3. **Dijital İletişim:** E-posta, mesajlaşma kuralları.
4. **Dijital Okuryazarlık:** Bilgiyi doğru kullanma ve üretme.
5. **Dijital Etik:** İnternette doğru davranışlar sergileme.
6. **Dijital Kanun:** Bilişim suçlarını bilme.
7. **Dijital Haklar ve Sorumluluklar:** Özgürlükler ve sınırlar.
8. **Dijital Sağlık:** Teknolojiyi sağlığımıza zarar vermeden kullanma.
9. **Dijital Güvenlik:** Kendimizi koruma.

**Bilişim Etiği Nedir?**
Bilgisayar ve internet kullanırken uyulması gereken ahlak kurallarıdır.
- Başkasının bilgisayarına zarar vermemek.
- Başkasının dosyalarını izinsiz almamak.
- Yalan bilgi yaymamak.
- Yazılımları izinsiz kopyalamamak (Korsan Yazılım).`,

                interactive: {
                    type: 'ethics-scenario',
                    description: 'Aşağıdaki durumlarda ne yapmanız gerektiğini seçin.',
                    scenarios: [
                        {
                            id: 1,
                            text: 'Arkadaşın okul bilgisayarında hesabını açık unutmuş.',
                            options: [
                                { text: 'Hemen çıkış yaparım ve ona söylerim.', correct: true, feedback: 'Harika! Bu en etik davranıştır.' },
                                { text: 'Mesajlarını okurum.', correct: false, feedback: 'Hayır, bu başkasının gizliliğini ihlal etmektir.' },
                                { text: 'Şifresini değiştirip şaka yaparım.', correct: false, feedback: 'Bu siber zorbalığa girer ve yanlıştır.' }
                            ]
                        },
                        {
                            id: 2,
                            text: 'İnternette çok beğendiğin bir resmi ödevinde kullanmak istiyorsun.',
                            options: [
                                { text: 'Direkt kopyalayıp yapıştırırım.', correct: false, feedback: 'Telif haklarına dikkat etmelisin.' },
                                { text: 'Resmin sahibinden izin alırım veya kaynağını belirtirim.', correct: true, feedback: 'Doğru! Emeğe saygı duymalıyız.' }
                            ]
                        }
                    ]
                },

                keyPoints: [
                    'Sanal dünyada da gerçek hayattaki gibi nazik ol.',
                    'Başkalarının haklarına saygı duy.',
                    'İnternetteki her bilgi doğru değildir.',
                    'Telif haklarını ihlal etme.'
                ]
            },

            quiz: [
                {
                    question: 'Aşağıdakilerden hangisi dijital vatandaşlık kurallarına aykırıdır?',
                    options: ['Kaynak belirterek bilgi paylaşmak', 'Başkasına hakaret etmek', 'Güvenli şifre kullanmak', 'Zamanı verimli kullanmak'],
                    correct: 1,
                    explanation: 'Siber zorbalık ve hakaret, etik ve yasal olmayan bir davranıştır.'
                },
                {
                    question: 'Telif hakkı ne demektir?',
                    options: ['İnternet hızı', 'Bir eserin sahibinin hakları', 'Bilgisayar markası', 'Oyun puanı'],
                    correct: 1,
                    explanation: 'Telif hakkı, bir eseri (resim, müzik, kitap vb.) üreten kişinin yasal haklarıdır.'
                }
            ]
        },

        {
            id: 'bt52-m2',
            title: 'Gizlilik ve Güvenlik',
            icon: '🔒',
            duration: '20 dakika',
            type: 'simulation',
            content: {
                theory: `**Güçlü Şifre Nasıl Olur?**

Hesaplarımızı korumak için kapımızı kilitlememiz gerekir. Şifreler bizim anahtarlarımızdır.

**Güçlü Bir Şifrenin Özellikleri:**
- **Uzunluk:** En az 8 karakter olmalı.
- **Karmaşıklık:** Büyük harf (A-Z), küçük harf (a-z), rakam (0-9) ve sembol (!?*%) içermeli.
- **Tahmin Edilemezlik:** Adınız, doğum tarihiniz, "123456" gibi basit şeyler OLMAMALI.

**Kişisel Bilgiler (Paylaşılmamalı!):**
- T.C. Kimlik Numarası
- Ev Adresi
- Telefon Numarası
- Okul Adı
- Anne/Baba Adı
- Şifreler

**Siber Tuzaklar:**
- **Phishing (Oltalama):** Sahte e-postalarla şifrenizi çalmaya çalışırlar. "Ödül kazandınız" linklerine tıklamayın!
- **Virüsler:** Bilgisayara zarar veren yazılımlar. Bilmediğiniz dosyaları indirmeyin.`,

                interactive: {
                    type: 'password-tester',
                    description: 'Şifrenizin ne kadar güçlü olduğunu test edin (Gerçek şifrenizi girmeyin!)'
                },

                keyPoints: [
                    'Şifreni kimseyle paylaşma (ailen hariç).',
                    'Her hesap için farklı şifre kullan.',
                    'Tanımadığın kişilerden gelen mesajları açma.',
                    'Bilgisayarını güncel tut.'
                ]
            },

            quiz: [
                {
                    question: 'Hangi şifre daha güvenlidir?',
                    options: ['123456', 'ahmet123', 'Tr!5xP9#m', 'password'],
                    correct: 2,
                    explanation: 'Büyük/küçük harf, rakam ve sembol içeren karmaşık şifreler daha güvenlidir.'
                },
                {
                    question: 'Size "Tebrikler telefon kazandınız, linke tıklayın" diye bir mesaj gelirse ne yapmalısınız?',
                    options: ['Hemen tıklarım', 'Arkadaşlarıma gönderirim', 'Mesajı silerim ve tıklamam', 'Teşekkür ederim'],
                    correct: 2,
                    explanation: 'Bu bir oltalama (phishing) tuzağıdır. Asla tıklanmamalıdır.'
                }
            ]
        },
        {
            id: 'bt52-m3',
            title: 'Siber Zorbalık',
            icon: '🚫',
            duration: '15 dakika',
            type: 'interactive',
            content: {
                theory: `**Siber Zorbalık Nedir?**

Bilgi ve iletişim teknolojilerini kullanarak bir birey veya gruba, özel ya da tüzel bir kişiliğe karşı yapılan teknik ya da ilişkisel tarzda zarar verme davranışlarının tümüdür.

**Siber Zorbalık Örnekleri:**
- İnternette biriyle alay etmek.
- İziniz fotoğraf paylaşmak.
- Hakkında dedikodu yaymak.
- Tehdit edici mesajlar atmak.
- Oyunlarda dışlamak veya kötü söz söylemek.

**Siber Zorbalığa Uğrarsan Ne Yapmalısın?**
1. **Cevap Verme:** Zorba senin üzülmeni ister.
2. **Kanıt Al:** Ekran görüntüsü al.
3. **Engelle:** O kişiyi engelle.
4. **Paylaş:** Güvendiğin bir yetişkine (anne, baba, öğretmen) anlat.
5. **Şikayet Et:** Platformun şikayet özelliğini kullan.`,

                interactive: {
                    type: 'bullying-response',
                    description: 'Zorbalıkla başa çıkma yöntemlerini eşleştirin.',
                    pairs: [
                        { situation: 'Biri sana kötü söz yazdı', action: 'Cevap verme ve engelle' },
                        { situation: 'Tehdit ediliyorsun', action: 'Ailene haber ver' },
                        { situation: 'Rahatsız edici bir fotoğrafın paylaşıldı', action: 'Site yönetimine şikayet et' }
                    ]
                },

                keyPoints: [
                    'Siber zorbalık suçtur.',
                    'Sessiz kalma, yardım iste.',
                    'Sen de başkasına zorbalık yapma.',
                    'Empati kur: Sana yapılmasını istemediğini başkasına yapma.'
                ]
            },

            quiz: [
                {
                    question: 'Siber zorbalığa uğradığında İLK yapmaman gereken şey nedir?',
                    options: ['Ailene söylemek', 'Zorbaya aynı şekilde karşılık vermek', 'Ekran görüntüsü almak', 'Kişiyi engellemek'],
                    correct: 1,
                    explanation: 'Zorbaya karşılık vermek olayı büyütür ve seni de suçlu duruma düşürebilir.'
                }
            ]
        }
    ],

    finalQuiz: [
        {
            question: 'Aşağıdakilerden hangisi kişisel bir bilgidir ve herkesle paylaşılmamalıdır?',
            options: ['Tuttuğun takım', 'Sevdiğin renk', 'Ev adresin', 'En sevdiğin ders'],
            correct: 2,
            explanation: 'Ev adresi güvenlik açısından gizli tutulması gereken kişisel bir bilgidir.'
        },
        {
            question: 'Güçlü bir şifre oluştururken hangisinden kaçınmalıyız?',
            options: ['Sembol kullanmak', 'En az 8 karakter yapmak', 'Doğum tarihimizi kullanmak', 'Büyük-küçük harf karıştırmak'],
            correct: 2,
            explanation: 'Doğum tarihi gibi kolay tahmin edilebilir bilgiler şifrede olmamalıdır.'
        },
        {
            question: 'İnternette birisi sizi rahatsız ederse ne yapmalısınız?',
            options: ['Ona küfür etmeliyim', 'Bilgisayarı kapatıp hiç açmamalıyım', 'Güvendiğim bir yetişkine anlatmalıyım', 'Arkadaşlarımla ona saldırmalıyım'],
            correct: 2,
            explanation: 'Böyle durumlarda mutlaka bir yetişkinden yardım istemek en doğrusudur.'
        }
    ]
};
