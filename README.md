📰 BBC News Test Otomasyonu
Bu proje, Playwright ve TypeScript kullanarak BBC News web sitesinin temel işlevlerini test etmek için geliştirilmiştir. Sayfa nesne modeli (POM) yapısı kullanılarak oluşturulan bu test otomasyonu, navigasyon, arama fonksiyonu ve Premier League puan tablosu gibi çeşitli özelliklerin doğruluğunu kontrol etmektedir.

📌 Kullanılan Teknolojiler
🖥️ Test Framework: Playwright
📝 Programlama Dili: TypeScript
📦 Test Senaryoları: UI Test Otomasyonu
🔧 Proje Yapısı: Page Object Model (POM)
🏆 Test Kapsamı
✅ Navigasyon Testleri:
BBC News ana sayfasındaki farklı kategoriler arasında geçiş yapılarak doğrulama testleri gerçekleştirilir.

✅ Arama Fonksiyonu Testleri:
Belirli bir kelimenin arama sonuçlarında yer alıp almadığını kontrol eder.

✅ Premier League Puan Tablosu Karşılaştırma:
BBC News ve Premier League'in resmi web sitesindeki ilk 3 takımın sıralamasını ve puanlarını karşılaştırarak doğrulama yapar.

📂 Proje Yapısı

BBC-News-Test/
│── tests/                    
│   ├── homepage.spec.ts       
│   ├── search.spec.ts         
│   ├── sportpage.spec.ts      
│   ├── businesspage.spec.ts   
│   ├── culturepage.spec.ts    
│   ├── innovationpage.spec.ts 
│   ├── newspage.spec.ts       
│   ├── artspage.spec.ts       
│   ├── travelpage.spec.ts     
│   ├── earthpage.spec.ts      
│   ├── audiopage.spec.ts      
│   ├── videopage.spec.ts      
│   ├── livepage.spec.ts       
│── pages/                     
│   ├── HomePage.ts
│   ├── NewsPage.ts
│   ├── SportPage.ts
│   ├── BusinessPage.ts
│   ├── InnovationPage.ts
│   ├── CulturePage.ts
│   ├── ArtsPage.ts
│   ├── TravelPage.ts
│   ├── EarthPage.ts
│   ├── AudioPage.ts
│   ├── VideoPage.ts
│   ├── LivePage.ts
│── helpers/                    
│── playwright.config.ts        
│── README.md                   

🧐 Geri Bildirim ve Katkı
Bu projeyi geliştirmek için her türlü geri bildiriminiz ve öneriniz benim için çok değerli! Pull request’ler ve issue'lar açarak katkıda bulunabilirsiniz.

📌 Bağlantılar:
🔗 LinkedIn: https://www.linkedin.com/in/kazimsahin/
