#📰 BBC News Test Otomasyonu
Bu proje, Playwright ve TypeScript kullanarak BBC News web sitesinin temel işlevlerini test etmek için geliştirilmiştir. Sayfa nesne modeli (POM) yapısı kullanılarak oluşturulan bu test otomasyonu, navigasyon, arama fonksiyonu ve Premier League puan tablosu gibi çeşitli özelliklerin doğruluğunu kontrol etmektedir.

##📌 Kullanılan Teknolojiler<br/>
🖥️ Test Framework: Playwright<br/>
📝 Programlama Dili: TypeScript<br/>
📦 Test Senaryoları: UI Test Otomasyonu<br/>
🔧 Proje Yapısı: Page Object Model (POM)<br/>

##🏆 Test Kapsamı<br/>
✅ Navigasyon Testleri:<br/>
BBC News ana sayfasındaki farklı kategoriler arasında geçiş yapılarak doğrulama testleri gerçekleştirilir.<br/>

✅ Arama Fonksiyonu Testleri:<br/>
Belirli bir kelimenin arama sonuçlarında yer alıp almadığını kontrol eder.<br/>

✅ Premier League Puan Tablosu Karşılaştırma:<br/>
BBC News ve Premier League'in resmi web sitesindeki ilk 3 takımın sıralamasını ve puanlarını karşılaştırarak doğrulama yapar.<br/>

##📂 Proje Yapısı<br/>

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

##🧐 Geri Bildirim ve Katkı<br/>
Bu projeyi geliştirmek için her türlü geri bildiriminiz ve öneriniz benim için çok değerli! Pull request’ler ve issue'lar açarak katkıda bulunabilirsiniz.<br/>

📌 Bağlantılar:<br/>
🔗 LinkedIn: https://www.linkedin.com/in/kazimsahin/<br/>
