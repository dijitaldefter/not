// Derinlemesine Modüler İçerik - BT.5.5 - Problem Çözme ve Programlama
const deepContent_BT55 = {
    id: 'bt-5-5',
    title: 'Problem Çözme ve Programlama',
    icon: '🧮',
    color: 'from-indigo-500 to-violet-500',
    description: 'Algoritma, akış şeması, blok tabanlı programlama',

    modules: [
        {
            id: 'bt55-m1',
            title: 'Problem Çözme ve Algoritma',
            icon: '🧩',
            duration: '20 dakika',
            type: 'interactive',
            content: {
                theory: `**Problem Nedir?**
Çözülmesi gereken sorun veya aşılması gereken engeldir.
- Örnek: "Okula geç kalmak", "Karnının acıkması", "Oyuncağının pilinin bitmesi".

**Algoritma Nedir?**
Bir problemin çözümü için izlenen **ADIM ADIM** yoldur.
- Başlangıcı ve sonu bellidir.
- Adımlar sırasıyla uygulanır.

**Günlük Hayattan Algoritma Örneği (Ayran Yapma):**
1. BAŞLA
2. Yoğurdu kaba koy
3. Üzerine su ekle
4. Biraz tuz at
5. İyice çırp
6. Bardağa dök
7. BİTİR

**Akış Şeması:**
Algoritmaların şekillerle gösterilmesidir.
- **Oval:** Başla / Bitir
- **Dikdörtgen:** İşlem (Eylem)
- **Eşkenar Dörtgen (Baklava):** Karar (Evet/Hayır)
- **Oklar:** Akış yönü`,

                interactive: {
                    type: 'algorithm-builder',
                    description: 'Diş fırçalama algoritmasını doğru sıraya dizin.',
                    steps: [
                        { id: 1, text: 'BAŞLA', order: 1 },
                        { id: 2, text: 'Fırçaya macun sür', order: 2 },
                        { id: 3, text: 'Dişlerini fırçala', order: 3 },
                        { id: 4, text: 'Ağzını çalkala', order: 4 },
                        { id: 5, text: 'BİTİR', order: 5 }
                    ]
                },

                keyPoints: [
                    'Algoritma adım adım olmalıdır.',
                    'Her zaman BAŞLA ile başlar, BİTİR ile biter.',
                    'Sıralama çok önemlidir (Önce çorap, sonra ayakkabı!).'
                ]
            },

            quiz: [
                {
                    question: 'Algoritma ne ile başlar?',
                    options: ['İşlem', 'Karar', 'BAŞLA', 'BİTİR'],
                    correct: 2,
                    explanation: 'Her algoritma mutlaka BAŞLA komutu ile başlar.'
                },
                {
                    question: 'Akış şemalarında "Karar Verme" (Eğer) işlemi hangi şekille gösterilir?',
                    options: ['Dikdörtgen', 'Daire', 'Eşkenar Dörtgen (Baklava)', 'Üçgen'],
                    correct: 2,
                    explanation: 'Karar yapıları (Evet/Hayır soruları) eşkenar dörtgen ile gösterilir.'
                }
            ]
        },

        {
            id: 'bt55-m2',
            title: 'Sabit ve Değişkenler',
            icon: '📦',
            duration: '15 dakika',
            type: 'simulation',
            content: {
                theory: `**Değişken (Variable) Nedir?**
Bilgisayarın hafızasında veri sakladığımız kutulardır. İçindeki değer değişebilir.
- Örnek: \`Puan\`, \`Can\`, \`Süre\`, \`İsim\`

**Sabit (Constant) Nedir?**
Değeri program boyunca HİÇ değişmeyen verilerdir.
- Örnek: \`Pi Sayısı (3.14)\`, \`Bir haftadaki gün sayısı (7)\`

**Veri Türleri:**
1. **Sayı (Number):** 5, 100, -20, 3.5
2. **Metin (String):** "Merhaba", "Ali", "123" (Tırnak içinde)
3. **Mantıksal (Boolean):** Doğru (True) / Yanlış (False)

**Örnek:**
Oyun başladığında:
- Puan = 0 (Değişken - Artacak)
- Can = 3 (Değişken - Azalacak)
- Bölüm Süresi = 60 (Sabit - Hep 60 sn başlar)`,

                interactive: {
                    type: 'variable-box',
                    description: 'Kutuların içine doğru verileri yerleştirin.',
                    boxes: [
                        { name: 'İsim (Metin)', type: 'string' },
                        { name: 'Yaş (Sayı)', type: 'number' },
                        { name: 'Öğrenci mi? (Mantıksal)', type: 'boolean' }
                    ]
                },

                keyPoints: [
                    'Değişken bir kutudur, içindeki değişebilir.',
                    'Sabitlerin değeri değişmez.',
                    'Metinler tırnak işareti (" ") içine yazılır.'
                ]
            },

            quiz: [
                {
                    question: 'Bir oyundaki "Skor" ne tür bir veridir?',
                    options: ['Sabit', 'Değişken', 'Komut', 'Döngü'],
                    correct: 1,
                    explanation: 'Skor oyun boyunca sürekli değiştiği için bir değişkendir.'
                },
                {
                    question: 'Hangisi bir metin (string) verisidir?',
                    options: ['100', 'True', '"Merhaba"', '3.14'],
                    correct: 2,
                    explanation: 'Tırnak işareti içindeki veriler metin (string) olarak kabul edilir.'
                }
            ]
        },

        {
            id: 'bt55-m3',
            title: 'Kodlama ve Döngüler',
            icon: '💻',
            duration: '25 dakika',
            type: 'interactive',
            content: {
                theory: `**Programlama (Kodlama) Nedir?**
Algoritmaların bilgisayarın anlayacağı dilde yazılmasıdır.

**Temel Yapılar:**

1. **Sıralı Yapı:** Komutların alt alta sırayla çalışması.
   - Git
   - Dön
   - Git

2. **Döngü (Loop):** Bir işlemin tekrar edilmesi.
   - **Sürekli Tekrarla:** Sonsuza kadar yapar.
   - **10 Defa Tekrarla:** Sayılı döngü.
   - **Olana Kadar Tekrarla:** Şartlı döngü.
   
   *Örnek:* 4 kenar çizmek için 4 kere "İleri git, Sağa dön" yazmak yerine, "4 defa tekrarla (İleri git, Sağa dön)" deriz.

3. **Karar Yapısı (Eğer / If):** Şarta göre işlem yapma.
   - **Eğer** duvara çarparsan **Geri dön**.
   - **Eğer** puan > 100 ise **Seviye atla**.`,

                interactive: {
                    type: 'code-editor',
                    description: 'Karakteri hedefe ulaştırmak için blokları kullanın.',
                    blocks: ['İleri Git', 'Sağa Dön', 'Sola Dön', 'Tekrarla']
                },

                keyPoints: [
                    'Döngüler kodumuzu kısaltır.',
                    'Eğer yapısı akıllı kararlar vermeyi sağlar.',
                    'Hata yaparsan (Bug), düzeltmek (Debug) eğlencelidir!'
                ]
            },

            quiz: [
                {
                    question: 'Bir işlemi 100 kere yaptırmak için hangisini kullanmak mantıklıdır?',
                    options: ['100 kere alt alta yazmak', 'Döngü (Loop) kullanmak', 'Bilgisayarı kapatmak', 'Hepsini silmek'],
                    correct: 1,
                    explanation: 'Döngüler, tekrar eden işlemleri kısa ve pratik şekilde yapmamızı sağlar.'
                },
                {
                    question: '"Eğer hava yağmurluysa şemsiye al" cümlesi programlamada neye örnektir?',
                    options: ['Döngü', 'Değişken', 'Karar Yapısı (Koşul)', 'Sabit'],
                    correct: 2,
                    explanation: 'Bu bir koşul (şart) cümlesidir. Bir duruma göre karar verilir.'
                }
            ]
        }
    ],

    finalQuiz: [
        {
            question: 'Algoritmaların şekillerle gösterilmesine ne denir?',
            options: ['Kodlama', 'Akış Şeması', 'Değişken', 'Döngü'],
            correct: 1,
            explanation: 'Akış şeması, algoritmanın görsel halidir.'
        },
        {
            question: 'Programlamada hata ayıklama işlemine ne ad verilir?',
            options: ['Coding', 'Debugging', 'Looping', 'Gaming'],
            correct: 1,
            explanation: 'Bug hata demektir, Debugging ise hatayı bulup düzeltme işlemidir.'
        },
        {
            question: 'Aşağıdakilerden hangisi bir programlama dili DEĞİLDİR?',
            options: ['Python', 'Scratch', 'C++', 'Klavye'],
            correct: 3,
            explanation: 'Klavye bir donanım parçasıdır, programlama dili değildir.'
        }
    ]
};
