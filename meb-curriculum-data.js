// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi Kazanımları
// 5 Ana Ünite: BT.5.1 - BT.5.5

const mebTopics = {
    'bt-5-1': {
        id: 'bt-5-1',
        title: 'Bilişim Teknolojileri',
        icon: '💻',
        color: 'from-blue-500 to-cyan-500',
        description: 'Bilgi ve iletişim teknolojileri, bilgisayar sistemleri ve dosya yönetimi',
        summary: `**Bilişim Teknolojileri** günlük yaşamımızın ayrılmaz bir parçası haline gelmiştir. Bu ünite, bilgisayar sistemlerini, donanım ve yazılım kavramlarını ve temel bilgisayar kullanımını kapsar.

**Ana Konular:**

**1. Temel Kavramlar:** Bilişim teknolojileri nedir? Bilgi toplumu, dijital okuryazarlık gibi kavramları öğreneceğiz.

**2. Bilişim Teknolojilerinin Tarihçesi:** İlk bilgisayarlardan günümüze kadar olan gelişimi keşfedeceğiz.

**3. Günlük Yaşamdaki Etkileri:** Olumlu ve olumsuz yönlerini tartışacağız.

**4. Sağlık Etkileri:** Bilgisayar kullanımının beden ve ruh sağlığı üzerindeki etkileri.

**5. Bilgisayar Sistemleri:** Donanım ve yazılım nedir? Bit, byte gibi kavramlar.

**6. Giriş/Çıkış Birimleri:** Klavye, fare, monitör, yazıcı gibi donanımlar.

**7. Veri Saklama:** HDD, SSD, USB gibi depolama birimleri.

**8. Dosya Yönetimi:** Dosya ve klasör oluşturma, kopyalama, taşıma, silme işlemleri.`,
        questions: [
            {
                id: 1,
                question: 'Bilişim teknolojileri hangi alanlarda kullanılır?',
                options: ['Sadece eğitimde', 'Sadece sağlıkta', 'Eğitim, sağlık, iletişim, eğlence gibi birçok alanda', 'Sadece oyunlarda'],
                correct: 2
            },
            {
                id: 2,
                question: 'Bilgisayar sistemi hangi iki ana bileşenden oluşur?',
                options: ['Klavye ve fare', 'Monitör ve yazıcı', 'Donanım ve yazılım', 'İnternet ve e-posta'],
                correct: 2
            },
            {
                id: 3,
                question: 'Bit ve byte arasındaki ilişki nedir?',
                options: ['1 byte = 8 bit', '1 bit = 8 byte', '1 byte = 16 bit', '1 bit = 1000 byte'],
                correct: 0
            },
            {
                id: 4,
                question: 'Hangi depolama birimi en büyük kapasiteye sahiptir?',
                options: ['Kilobyte (KB)', 'Megabyte (MB)', 'Gigabyte (GB)', 'Terabyte (TB)'],
                correct: 3
            },
            {
                id: 5,
                question: 'Dosya yönetiminde "CTRL + C" kısayolu ne işe yarar?',
                options: ['Dosyayı siler', 'Dosyayı kopyalar', 'Dosyayı keser', 'Dosyayı yapıştırır'],
                correct: 1
            }
        ]
    },
    'bt-5-2': {
        id: 'bt-5-2',
        title: 'Etik ve Güvenlik',
        icon: '⚖️',
        color: 'from-orange-500 to-red-500',
        description: 'Bilişim etiği, dijital vatandaşlık, gizlilik ve güvenlik',
        summary: `**Etik ve Güvenlik** dijital dünyada sorumlu bir birey olmak için çok önemlidir. Dijital vatandaşlık, gizlilik ve güvenlik konular ında bilinçli olmak gerekir.

**Ana Konular:**

**1. Bilişim Etiği:** Doğru ve yanlış davranışlar nelerdir? Telif hakları, kişisel bilgilerin korunması.

**2. Dijital Vatandaşlık:** E-devlet, e-randevu, e-bankacılık gibi hizmetleri tanıyalım.

**3. Dijital Kimlik:** İnternetteki kimliğimiz gerçeği yansıtmayabilir.

**4. Dijital İzler:** Paylaşımlarımız kalıcıdır ve dijital izler bırakır.

**5. Gizlilik:** Hangi bilgileri paylaşmalı, hangilerini gizli tutmalıyız?

**6. Şifre Güvenliği:** Güçlü şifreler nasıl oluşturulur?

**7. Çevrimiçi Saygı:** Başkalarının haklarına nasıl saygı duyarız?

**8. Etik İhlalleri:** Siber zorbalık, telif ihlali gibi durumların sonuçları.`,
        questions: [
            {
                id: 1,
                question: 'E-devlet, e-randevu gibi hizmetler hangi kavramla ilgilidir?',
                options: ['Oyun oynama', 'Dijital vatandaşlık', 'Sosyal medya', 'Video izleme'],
                correct: 1
            },
            {
                id: 2,
                question: 'Güçlü bir şifre hangi özelliklere sahip olmalıdır?',
                options: ['Sadece harflerden oluşmalı', 'Doğum tarihi olmalı', 'Büyük-küçük harf, rakam ve sembol içermeli', 'Kısa ve basit olmalı'],
                correct: 2
            },
            {
                id: 3,
                question: 'Hangi bilgi kesinlikle paylaşılmamalıdır?',
                options: ['Favori renk', 'Şifre ve kimlik numarası', 'Sevdiğin hayvan', 'Hobiler'],
                correct: 1
            },
            {
                id: 4,
                question: 'İnternette paylaştığımız fotoğraflar hakkında ne söylenebilir?',
                options: ['Hemen silinir', 'Kalıcıdır ve dijital iz bırakır', 'Sadece arkadaşlar görür', 'Önemli değildir'],
                correct: 1
            },
            {
                id: 5,
                question: 'Siber zorbalıkla ilgili doğru olan ifade hangisidir?',
                options: ['Sadece şakadır', 'Etik ihlalidir ve cezası vardır', 'Normal değil ama sorun değildir', 'Sadece çocuklar yapar'],
                correct: 1
            }
        ]
    },
    'bt-5-3': {
        id: 'bt-5-3',
        title: 'İletişim, Araştırma ve İş Birliği',
        icon: '🌐',
        color: 'from-green-500 to-emerald-500',
        description: 'Bilgisayar ağları, internet, araştırma ve iletişim teknolojileri',
        summary: `**İletişim ve İş Birliği** modern dünyada çok önemlidir. Bilgisayar ağları, internet ve iletişim araçları sayesinde dünyanın her yerinden insanlarla bağlantı kurabiliriz.

**Ana Konular:**

**1. Bilgisayar Ağları:** LAN (Yerel Alan Ağı), WAN (Geniş Alan Ağı), WLAN (Kablosuz Ağ).

**2. Bağlanma Teknolojileri:** Modem, router, kablosuz ağ gibi cihazlar.

**3. İnternet Adresleri:** URL yapısı, alan adları nasıl çalışır?

**4. Web Tarayıcıları:** Chrome, Firefox, Edge gibi tarayıcılar.

**5. Arama Motorları:** Google, Bing ile nasıl etkili araştırma yapılır?

**6. Kaynak Gösterme:** Kullandığımız bilgilerin kaynağını belirtmek neden önemlidir?

**7. EBA (Eğitim Bilişim Ağı):** EBA'da neler yapabiliriz?

**8. İletişim Araçları:** E-posta, anlık mesajlaşma, görüntülü konuşma.`,
        questions: [
            {
                id: 1,
                question: 'LAN ne demektir?',
                options: ['Geniş Alan Ağı', 'Yerel Alan Ağı', 'Kablosuz Ağ', 'İnternet Ağı'],
                correct: 1
            },
            {
                id: 2,
                question: 'Web tarayıcısının görevi nedir?',
                options: ['Oyun oynamak', 'Web sitelerini görüntülemek', 'Dosya saklamak', 'Resim çekmek'],
                correct: 1
            },
            {
                id: 3,
                question: 'İnternetten aldığınız bilgiyi kullanırken ne yapmalısınız?',
                options: ['Hiçbir şey', 'Kaynak göstermeliyim', 'Kendim yazmış gibi gösterebilirim', 'Değiştirerek kullanabilirim'],
                correct: 1
            },
            {
                id: 4,
                question: 'EBA (Eğitim Bilişim Ağ ı) ne için kullanılır?',
                options: ['Oyun oynamak', 'Eğitim içeriklerine erişmek', 'Sosyal medya', 'Müzik dinlemek'],
                correct: 1
            },
            {
                id: 5,
                question: 'E-posta adresi oluştururken nelere dikkat edilmelidir?',
                options: ['Karmaşık ve unutulacak olmalı', 'Kişisel bilgiler içermeli', 'Anlaşılır ve güvenli olmalı', 'Çok kısa olmalı'],
                correct: 2
            }
        ]
    },
    'bt-5-4': {
        id: 'bt-5-4',
        title: 'Ürün Oluşturma',
        icon: '🎨',
        color: 'from-purple-500 to-pink-500',
        description: 'Dijital ürün oluşturma, kelime işlemci, sunu hazırlama',
        summary: `**Ürün Oluşturma** ile düşüncelerimizi ve fikirlerimizi dijital ortamda ifade edebiliriz. Kelime işlemci programları, sunu hazırlama araçları ve görsel düzenleme programları kullanarak harika ürünler oluşturabiliriz.

**Ana Konular:**

**1. Görsel Dosya Biçimleri:** Vektörel (SVG) ve bitmap (JPG, PNG) formatlar.

**2. Görsel Düzenleme:** Kırpma, döndürme, renk ayarlama gibi işlemler.

**3. Kelime İşlemci:** Microsoft Word, Google Docs gibi programlar.

**4. Belge Oluşturma:** Metin yazma, biçimlendirme, başlık kullanma.

**5. Metin Düzenleme:** Bul ve değiştir, yazım denetimi.

**6. Sunu Hazırlama:** PowerPoint, Google Slides ile sunumlar.

**7. Sunu Tasarımı:** Slayt düzeni, animasyonlar, geçişler.

**8. İş Birliği:** Belgeleri paylaşma ve birlikte çalışma.`,
        questions: [
            {
                id: 1,
                question: 'Vektörel ve bitmap görsel arasındaki fark nedir?',
                options: ['Hiçbir fark yok', 'Vektörel büyütüldüğünde kalitesi bozulmaz', 'Bitmap daha küçük dosyadır', 'Vektörel sadece fotoğraflarda kullanılır'],
                correct: 1
            },
            {
                id: 2,
                question: 'Kelime işlemci programında "CTRL + B" kısayolu ne işe yarar?',
                options: ['Metni siler', 'Metni italik yapar', 'Metni kalın (bold) yapar', 'Metni kopyalar'],
                correct: 2
            },
            {
                id: 3,
                question: 'Sunu hazırlarken hangi ilkelere dikkat edilmelidir?',
                options: ['Çok fazla metin yazılmalı', 'Görseller ve kısa metinler kullanılmalı', 'Sadece metin olmalı', 'Animasyon hiç olmamalı'],
                correct: 1
            },
            {
                id: 4,
                question: 'Google Docs\'un avantajı nedir?',
                options: ['Sadece bilgisayarda çalışır', 'İnternet olmadan kullanılır', 'Çevrimiçi iş birliği yapılabilir', 'Daha pahalıdır'],
                correct: 2
            },
            {
                id: 5,
                question: 'Belge kaydetme işlemi neden önemlidir?',
                options: ['Önemli değildir', 'Yaptığımız çalışmayı kaybetmemek için', 'Sadece öğretmen için', 'Bilgisayarı hızlandırır'],
                correct: 1
            }
        ]
    },
    'bt-5-5': {
        id: 'bt-5-5',
        title: 'Problem Çözme ve Programlama',
        icon: '🧮',
        color: 'from-indigo-500 to-violet-500',
        description: 'Algoritma, akış şeması, blok tabanlı programlama',
        summary: `**Problem Çözme ve Programlama** ile algoritmik düşünme becerimizi geliştiririz. Blok tabanlı programlama araçları (Scratch, Code.org) ile programlama mantığını öğreniriz.

**Ana Konular:**

**1. Problem Çözme:** Problem nedir? Nasıl çözülür?

**2. Problem Analizi:** Problemi parçalara ayırma.

**3. Değişken ve Sabit:** Programlamada veri saklama.

**4. Operatörler:** Matematik ve mantık operatörleri (+, -, *, /, >, <, ==).

**5. Algoritma:** Problemin çözüm adımları.

**6. Akış Şeması:** Algoritmaların görsel gösterimi.

**7. Programlama Kavramları:** Program, programlama dili nedir?

**8. Blok Tabanlı Programlama:** Scratch ile kodlama.

**9. Doğrusal Mantık:** Komutların sırayla çalışması.

**10. Karar Yapıları:** Eğer-o zaman (if-then) blokları.

**11. Döngüler:** Tekrar eden işlemler (loop).

**12. Hata Ayıklama:** Programdaki hataları bulma ve düzeltme.`,
        questions: [
            {
                id: 1,
                question: 'Algoritma nedir?',
                options: ['Bir programlama dili', 'Problem çözme adımları', 'Bir bilgisayar modeli', 'Bir oyun'],
                correct: 1
            },
            {
                id: 2,
                question: 'Akış şemasında karar yapısını hangi şekil gösterir?',
                options: ['Dikdörtgen', 'Eşkenar dörtgen (Baklava)', 'Oval', 'Daire'],
                correct: 1
            },
            {
                id: 3,
                question: 'Değişken ne işe yarar?',
                options: ['Sadece sayı saklar', 'Veri saklar ve değeri değişebilir', 'Sadece metin saklar', 'Hiçbir işe yaramaz'],
                correct: 1
            },
            {
                id: 4,
                question: 'Döngü (loop) yapısı ne zaman kullanılır?',
                options: ['Bir kez çalışacak kod için', 'Tekrar eden işlemler için', 'Karar verme için', 'Program bitirme için'],
                correct: 1
            },
            {
                id: 5,
                question: 'Scratch gibi blok tabanlı programlama araçlarının avantajı nedir?',
                options: ['Profesyonel yazılım geliştirme', 'Programlama mantığını kolayca öğrenme', 'Oyun oynama', 'Resim çizme'],
                correct: 1
            }
        ]
    }
};
