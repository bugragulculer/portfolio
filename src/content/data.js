import Header from "../assets/header.png";
import Dashboard from "../assets/dashboard.png";
import Market from "../assets/market.png";
import Bugra from "../assets/bugra.png";
import Google from "../assets/google.png";
import GreenTangerin from "../assets/greentangerin_black.png";
import Error from "../assets/error.jpg";
import Aliskanlik from "../assets/aliskanlik.png";
import Aylik from "../assets/aylik.png";
import Book from '../assets/book_en.png';
import CvEn from "../assets/cv_en.png";
import Cv from "../assets/CV.png";
import Daily from "../assets/daily_en.png";
import Gunluk from "../assets/gunluk_2.png";
import GunlukPlan from "../assets/gunluk.png";
import Habits from "../assets/habits_en.png";
import Hafta from "../assets/hafta.png";
import Journal from "../assets/journal_en.png";
import Kitap from "../assets/kitap.png";
import Media from "../assets/media_en.png";
import Medya from "../assets/medya.png";
import Monthly from "../assets/monthly_en.png";
import Okul from "../assets/okul.png";
import School from "../assets/school_en.png";
import Weekly from "../assets/weekly_en.png";
import Yearly from "../assets/yearly_en.png";
import Yillik from "../assets/yillik.png";

export const data = {
  EN: {
    Navbar: [
      {
        id: "1",
        title: "Notion",
        cName: "notion",
        url: "/notion",
      },
      {
        id: "2",
        title: "Blog",
        cName: "blog",
        url: "/blog",
      },
      {
        id: "3",
        title: "Podcast",
        cName: "podcast",
        url: "/podcast",
      },
      {
        id: "4",
        title: "YouTube",
        cName: "youtube",
        url: "https://www.youtube.com/channel/UCbxvcNnIvtiF_1VZKMPyWCA",
      },
      {
        id: "5",
        title: "TR",
        cName: "tr",
        url: "/tr",
      },
    ],
    Footer: {
      header: "Getting 1% better every day.",
      subheader: "Designed by me.",
      copyright: "Copyright ©2021 Bugra Gulculer. All rights reserved.",
    },
    MainHeader: {
      header1: "Hi there!",
      header2: "I'm a Designer, Software Developer, and Content Creator!",
      logo: Header,
    },
    SubHeader: {
      header1: "Hi, I'm Buğra. 👨🏻‍💻 It is nice to see you here.",
      header2: "I've been designing and developing websites for two years and it couldn't be more exciting.",
    },
    MyAbilities: [
      {
        header: "Designer",
        desc: "I love dealing with simple designs and associating different things, no matter what type of content.",
        topic1: "Things I Love Designing",
        item1: "UI, Apps, Web, Illustration, Poster",
        topic2: "Design Tools",
        item2: ["Affinity Designer", "Adobe Photoshop", "Figma", "Webflow", "Invision", "Pen & Paper"],
      },
      {
        header: "Software Developer",
        desc: "I love to plan and develop things from scratch and blend different ideas in the same pot.",
        topic1: "Languages & Libraries I Know",
        item1: "Javascript, HTML, CSS, React, Express, MongoDB, Sass, TypeScript, Redux",
        topic2: "Dev Tools",
        item2: ["Terminal", "GitHub", "Storybook", "Visual Studio Code", "Codepen"],
      },
    ],
    RecentWorks: [
      {
        logo: Dashboard,
        name: "E-commerce",
        desc: "React and Redux based E-Commerce dashboard to keep track of sales, customers and analytics.",
        url: "https://greentangerin-dashboard.web.app",
      },
      {
        logo: Market,
        name: "Market",
        desc: "A small React based market mockup to get product details from API and sort, filter, paginate the products. By Redux all these products can be added and removed from the cart as well.",
        url: "https://market-mockup.herokuapp.com/",
        
      },
      {
        logo: Bugra,
        name: "Bugra Gulculer",
        desc: "Current website you're in! It is designed and developed to showcase my work in the most personal way possible.",
        url: "https://bugragulculer.com"

      },
      {
        logo: GreenTangerin,
        name: "Green Tangerin",
        desc: "Brand new Green Tangerin website which is still under construction. Payment system will be implemented. It is designed and developed to showcase my illustrations and sell them in a neat and easy way.",
        url: "https://greentangerinwebsite.web.app/home",

      },
      {
        logo: Google,
        name: "Google Clone",
        desc: "Using Google API and React, I have developed a Google clone which can get search results and show it to you.",
        url: "https://clone-f557f.web.app/",
      },
    ],
    ShareProject: [
      {
        url: "https://github.com/bugragulculer",
        title: "⌨️ See More on GitHub",
      },
      {
        url: "https://dribbble.com/BugraGulculer",
        title: "🎨 See More on Dribbble",
      },
    ],
    OtherProjects: [
      {
        header: "Only Notion Community in Turkey 👥",
        desc: "I founded the first Notion community in Turkey to exhange ideas, learn Notion and create a powerful community.",
        url: "https://bugragulculer.com/notion",
      },
      {
        header: "YouTube Channels 📺",
        desc: "I'm publishing videos on YouTube in both English and Turkish. Videos are technology, software and programming related.",
        url: "https://www.youtube.com/channel/UCbxvcNnIvtiF_1VZKMPyWCA",
      },
      {
        header: "Personal Blog 🖋️",
        desc: "Just like YouTube, I'm publishing interesting articles in both English and Turkish. Articles are technology and life related.",
        url: "https://bugragulculer.com/blog",
      },
      {
        header: "Podcast 🎙️",
        desc: "I'm publishing podcast episodes when I want to talk about stuf. It is only available in Turkish however.",
        url: "https://bugragulculer.com/podcast",
      },
    ],
    Newsletter: {
      header: "✉️ Subscribe to My Newsletter",
      subheader: "I am sending a newsletter every Friday. No spam. Unsubscribe anytime.",
      mail: "Your Email",
      name: "Your Name",
      subscribe: "Subscribe",
    },
    BlogHeader: {
      name: "iOS 15 ",
      subheader: "A Great Iteration",
      desc: "Apple introduced the new operating system iOS 15, which will be used on iPhones, and frankly, they seem to have followed a slightly different path compared to previous years. ",
      url: "https://medium.com/macoclock/ios-15-a-great-iteration-de4449552a2",
      img: "https://miro.medium.com/max/3840/1*_um3BWLt_EqLSluk8hmQFQ.png",
      posts: "All My Blog Posts",
    },
    Notion: {
      header: "Notion",
      subheader: "All-in-One Workspace",
      desc: "One tool for you and your entire team. Write, plan and organize.",
      community: "Notion Turkey Community is now open!",
      communityDesc: "Get your seat by clicking here now!",
      learn: "Learn Notion with Me!",
      learnDesc: "I'm publishing Notion videos on YouTube! You can learn a lot from them. English videos will come in a very short time!",
      new: "If you're new to Notion",
      latest: "Latest Videos",
      planner: "Planner",
      tracker: "Tracker",
    },
    Podcast: {
      header: "Currently, I only do podcast in Turkish, however, in the near future, I'm planing to record podcasts in English. Stay Tuned.",
      sourceHeader: "You can list to my podcast in different platforms!",
    },
    Error: {
      errorImage: Error,
      errorHeader: "404 Not Found",
      errorSubheader: "Oopsie! Something's missing...",
      button: "Back to Home",
    },
    Planner: [
      {
        label: "Daily Plan",
        header: "Daily Plan",
        desc: "A useful Notion page where you can write daily things to do, plan which tasks will be done when, take necessary notes and keep track of your daily water consumption.",
        url: "https://www.notion.so/notionturkiye/Daily-Plan-61f246150cb344d19c43a096e7e663db",
        action: "Go to Template!",
        image: Daily,
        id: 101,
      },
      {
        label: "Weekly Plan",
        header: "Weekly Plan",
        desc: "A useful Notion page where you can write the weekly things to do, plan which tasks will be done on which day and when, and take the necessary notes.",
        url: "https://www.notion.so/notionturkiye/Weekly-To-Do-10d5b67f9aca4fc296101f4d004de1a8",
        action: "Go to Template!",
        image: Weekly,
        id: 102,
      },
      {
        label: "Monthy Plan",
        header: "Monthly Plan",
        desc: "A useful Notion page where you can write monthly things, mark which works will be done on which day on the calendar, and take the necessary notes.",
        url: "https://www.notion.so/notionturkiye/Monthly-Plan-7a109e0a07f14fa88eed5e386a8e948c",
        action: "Go to Template!",
        image: Monthly,
        id: 103,
      },
      {
        label: "Yearly Plan",
        header: "Yearly Plan",
        desc: "A handy Notion page where you can write down your yearly expectations and things to do, plan which jobs will be done in which quarter, and take notes.",
        url: "https://www.notion.so/notionturkiye/Yearly-Plan-1162c50e2c334f74aa6d62096f3a07be",
        action: "Go to Template!",
        image: Yearly,
        id: 104,
      },
      {
        label: "College Planner",
        header: "College Planner",
        desc: "It is your greatest assistant in the school where you can follow the contents of the lessons by subject, take notes on important dates such as exams, projects and assignments, and prepare notes and work cards for the lessons.",
        url: "https://www.notion.so/notionturkiye/School-2cce2182c9954defaedf5c0ef6fb216c",
        action: "Go to Template!",
        image: School,
        id: 105,
      },
    ],
    Tracker: [
      {
        label: "Habits",
        header: "Daily Habits",
        desc: "If you've read James Clear's Atomic Habits, you know how effective habits are in our lives. This template will help you keep track of your new habits!",
        url: "https://www.notion.so/notionturkiye/Daily-Habits-9f2ba784dbe94f549c100cf1ba1a12ff",
        action: "Go to Template!",
        image: Habits,
        id: 106,
      },
      {
        label: "Book",
        header: "Book Tracker",
        desc: "If you are fond of books like me, this template is just for you. This is a great template where you can track which book you read when or which page of which book you are on.",
        url: "https://www.notion.so/notionturkiye/Book-Tracker-d13c766c8b584efab0322b3b5ddc5e88",
        action: "Go to Template!",
        image: Book,
        id: 107,
      },
      {
        label: "Media",
        header: "Media Tracker",
        desc: "A great Notion template that will help you keep track of all kinds of content you can think of, from movies to books, from playlists to podcasts, from games to articles, and eliminates the question of which series you were in which episode.",
        url: "https://www.notion.so/notionturkiye/Media-Tracker-f19929b88b714513963e75c78cbd0174",
        action: "Go to Template!",
        image: Media,
        id: 108,
      },
      {
        label: "Journal",
        header: "Journal",
        desc: "Notion is a great diary app. The diary template I'm also using is now available for you! You are going to love it.",
        url: "https://www.notion.so/notionturkiye/Journal-bcc88b7134d3489bb6562fce970c14ec",
        action: "Go to Template!",
        image: Journal,
        id: 109,
      },
      {
        label: "CV",
        header: "CV Template",
        desc: "It is a very useful template that you can play with the information on your CV and the design of your CV, or share it on website when it is ready.",
        url: "https://www.notion.so/notionturkiye/CV-Template-a16a3722a2d14511a667832033f2a0b1",
        action: "Go to Template!",
        image: CvEn,
        id: 110,
      },
    ],
  },
  TR: {
    Navbar: [
      {
        id: "1",
        title: "Notion",
        cName: "notion",
        url: "/tr/notion",
      },
      {
        id: "2",
        title: "Blog",
        cName: "blog",
        url: "/tr/blog",
      },
      {
        id: "3",
        title: "Podcast",
        cName: "podcast",
        url: "/tr/podcast",
      },
      {
        id: "4",
        title: "YouTube",
        cName: "youtube",
        url: "https://www.youtube.com/channel/UCz-QyCCL_itusMxXAU1V6zw",
      },
      {
        id: "5",
        title: "EN",
        cName: "en",
        url: "/",
      },
    ],
    Footer: {
      header: "Her gün %1 daha iyiye.",
      subheader: "Benim tarafımdan tasarlanmıştır.",
      copyright: "Copyright ©2021 Bugra Gulculer. Tüm hakları saklıdır.",
    },
    MainHeader: {
      header1: "Merhaba!",
      header2: "Ben Tasarımcı, Yazılım Geliştirici ve İçerik Üreticisiyim.",
      logo: Header,
    },
    SubHeader: {
      header1: "Merhaba, ben Buğra. 👨🏻‍💻 Sizi burada görmek ne güzel!",
      header2: "İki yıldır websiteleri tasarlayıp geliştiriyorum ve bu benim tahminimden de eğlenceli bir hal almaya başladı.",
    },
    MyAbilities: [
      {
        logo: "",
        header: "Tasarımcı",
        desc: "Hangi tipte içerik olursa olsun yalın ve sade tasarımlarla uğraşmayı, farklı şeyleri ilişkilendirmeye bayılıyorum.",
        topic1: "Tasarlamayı Sevdiğim Şeyler",
        item1: "UI, Uygulamalar, Web, Ilüstrasyonlar, Poster",
        topic2: "Tasarım Araçları",
        item2: ["Affinity Designer", "Adobe Photoshop", "Figma", "Webflow", "Invision", "Kağıt & Kalem"],
      },
      {
        logo: "",
        header: "Yazılım Geliştirici",
        desc: "Bir şeyleri en baştan planlayıp geliştirmeyi, farklı fikirleri aynı kapta harmanlamayı çok seviyorum.",
        topic1: "Bildiğim Diller ve Kütüphaneler",
        item1: "Javascript, React, HTML, CSS, Sass, TypeScript, Redux",
        topic2: "Geliştirme Araçları",
        item2: ["Terminal", "GitHub", "Storybook", "Visual Studio Code", "Codepen"],
      },
    ],
    RecentWorks: [
      {
        logo: Dashboard,
        name: "E-commerce",
        desc: "Satışları, müşterileri ve analitiği takip etmek için React ve Redux tabanlı E-Ticaret panosu.",
        url: "https://greentangerin-dashboard.web.app",
      },
      {
        logo: Market,
        name: "Market",
        desc: "API'den ürün ayrıntılarını almak ve ürünleri sıralamak, filtrelemek, sayfalamak için küçük bir React tabanlı pazar modeli. Redux tarafından tüm bu ürünler sepete eklenebilir ve sepetten çıkarılabilir.",
        url: "https://market-mockup.herokuapp.com/",
      },
      {
        logo: Bugra,
        name: "Bugra Gulculer",
        desc: "Bulunduğunuz güncel web sitesi! Çalışmamı mümkün olan en kişisel şekilde sergilemek için tasarlanmış ve geliştirilmiştir.",
        url: "https://bugragulculer.com"
      },
      {
        logo: GreenTangerin,
        name: "Green Tangerin",
        desc: "Henüz yapım aşamasında olan yepyeni Green Tangerin web sitesi. Ödeme sistemi entegre edilecektir. Çizimlerimi sergilemek ve bunları düzgün ve kolay bir şekilde satmak için tasarlanmış ve geliştirilmiştir.",
        url: "https://greentangerinwebsite.web.app/home",
      },
      {
        logo: Google,
        name: "Google Clone",
        desc: "Google API ve React kullanarak, arama sonuçlarını alabilen ve size gösterebilen bir Google klonu",
        url: "https://clone-f557f.web.app/",
      },
    ],
    ShareProject: [
      {
        url: "https://dribbble.com/BugraGulculer",
        title: "🎨 Dribbble'da Gör",
      },
      {
        url: "https://github.com/bugragulculer",
        title: "⌨️ GitHub'da Gör",
      },
    ],
    OtherProjects: [
      {
        header: "Türkiye'nin Tek Notion Topluluğu 👥",
        desc: "Türkiye'deki ilk ve tek Notion Topluluğunu fikir alışverişinde bulunmak, Notion'ı öğrenmek ve güçlü bir topluluk oluşturmak adına kurdum..",
        url: "https://bugragulculer.com/notion",
      },
      {
        header: "YouTube Kanallarım 📺",
        desc: "YouTube'da hem İngilizce hem de Türkçe videolar paylaşıyorum. Videoların konuları genelde teknoloji, yazılım ve yazılımcılık üzerine oluyor.",
        url: "https://www.youtube.com/channel/UCz-QyCCL_itusMxXAU1V6zw",
      },
      {
        header: "Kişisel Blogum 🖋️",
        desc: "Aynı YouTube gibi, hem İngilizce hem de Türkçe enterasan makaleler paylaşıyorum. Genellikle makalelerim teknoloji ve hayat üzerine oluyor.",
        url: "https://bugragulculer.com/blog",
      },
      {
        header: "Podcast 🎙️",
        desc: "Konuşmaya, anlatmaya ihtiyacım olduğu dönemlerde podcat bölümleri paylaşıyorum. Şu an sadece Türkçe bölümlerim mevcut.",
        url: "https://bugragulculer.com/podcast",
      },
    ],
    Newsletter: {
      header: "✉️ Haftalık Bültenime kayıt olun!",
      subheader: "Her Cuma haftalık bültenimi mail kutunuzda bulabilirsiniz! Spam yok. Istediginiz zaman kaydınızı silin.",
      mail: "Mail Adresiniz",
      name: "Adınız",
      subscribe: "Abone Ol",
    },
    BlogHeader: {
      name: "iOS 15",
      subheader: "Mükemmel İterasyon",
      desc: "Apple iPhone’larda kullanılacak olan yeni işletim sistemi iOS 15'i tanıttı ve açıkçası geçen senelere göre biraz daha farklı bir yol izlemişler gibi duruyor.",
      url: "https://medium.com/t%C3%BCrkiye/ios-15-m%C3%BCkemmel-i%CC%87terasyon-52ce308402d0",
      img: "https://miro.medium.com/max/3840/1*_um3BWLt_EqLSluk8hmQFQ.png",
      posts: "Tüm Blog Yazılarım",
    },
    Notion: {
      header: "Notion",
      subheader: "Hepsi Bir Arada Çalısma Alanı",
      desc: "Sizin ve tüm ekibiniz için tek bir araç. Yazın, planlayın ve organize edin.",
      community: "Notion Türkiye Topluluğu Açıldı!",
      communityDesc: "Yerinizi almak için buraya şimdi tıklamanız yeterli!",
      learn: "Notion'ı öğrenmeye başlayın",
      learnDesc: "YouTube'da paylaştığım Notion videolarıyla Notion'ın temellerini öğrenebilir ve size özel sayfalar oluşturabilirsiniz.",
      new: "Yeni Başlayanlar İçin",
      latest: "Yeni Başlayanlar İçin",
      planner: "Planlayıcılar",
      tracker: "İzleyiciler",
      
    },
    Podcast: {
      header: "Şu an sadece Türkçe olan Podcast'ime hoşgeldiniz. Farklı kaynaklardan bölümleri dinlemek için aşağı kaydırın.",
      sourceHeader: "Beni farklı platformlarda dinleyebilirsiniz!",
    },
    Error: {
      errorImage: Error,
      errorHeader: "404 Bulunamadı",
      errorSubheader: "Maalesef bir yerlerde sıkıntı oldu.",
      button: "Ana Sayfaya Gidelim",
    },
    Planner: [
      {
        label: "Günlük Plan",
        header: "Günlük Plan",
        desc: "Günlük yapılacakları yazabileceğiniz, hangi işlerin ne zaman yapılacağını planlayabileceğiniz, gerekli notları alabileceğiniz ve günlük su tüketiminizi takip edebileceğiniz kullanışlı bir Notion sayfası.",
        url: "https://www.notion.so/notionturkiye/G-nl-k-Plan-c78efb276fe143b98fa514bf6d8924ca",
        action: "Şablona Götür",
        image: GunlukPlan,
        id: 201,
      },
      {
        label: "Haftalık Plan",
        header: "Haftalık Plan",
        desc: "Haftalık yapılacakları yazabileceğiniz, hangi işlerin hangi gün, ne zaman yapılacağını planlayabileceğiniz ve gerekli notları alabileceğiniz kullanışlı bir Notion sayfası.",
        url: "https://www.notion.so/notionturkiye/Haftal-k-Plan-cfc8435011cf44e1aecb4c801b0c2025",
        action: "Şablona Götür",
        image: Hafta,
        id: 202,
      },
      {
        label: "Aylık Plan",
        header: "Aylık Plan",
        desc: "Aylık yapılacakları yazabileceğiniz, hangi işlerin hangi gün, ne zaman yapılacağını takvim üstünde işaretleyebileceğiniz ve gerekli notları alabileceğiniz kullanışlı bir Notion sayfası.",
        url: "https://www.notion.so/notionturkiye/Ayl-k-Plan-6b4dbca280554054b80190d493beb3b3",
        action: "Şablona Götür",
        image: Aylik,
        id: 203,
      },
      {
        label: "Yıllık Plan",
        header: "Yıllık Plan",
        desc: "Yıllık beklentilerinizi ve yapılacaklarızı yazabileceğiniz, hangi işlerin hangi çeyrekte yapılacağını planlayabileceğiniz ve gerekli notları alabileceğiniz kullanışlı bir Notion sayfası.",
        url: "https://www.notion.so/notionturkiye/Y-ll-k-Plan-1c4b621ec9614f86b3cd7065bf0d5f79",
        action: "Şablona Götür",
        image: Yillik,
        id: 204,
      },
      {
        label: "Okul Planlayıcı",
        header: "Okul Planlayıcı",
        desc: "Derslerin içeriklerini konu konu takip edebileceğiniz, sınav, proje ve ödev gibi önemli tarihleri not alabileceğiniz, dersler için notlar ve çalışma kartları hazırlayabileceğiniz okuldaki en büyük yardımcınız.",
        url: "https://www.notion.so/notionturkiye/Okul-d63428cb10294300a3f2d66ddd48d17d",
        action: "Şablona Götür",
        image: Okul,
        id: 205,
      },
    ],
    Tracker: [
      {
        label: "Alışkanlıklar",
        header: "Günlük Alışkanlık",
        desc: "Eğer siz de James Clear'ın Atomik Alışkanlıklar kitabını okuduysanız alışkanlıkların hayatlarımız üstünde ne kadar etkili olduğunu biliyorsunuz demektir. Bu şablon yeni alışkanlıklarınızı takip etmenize yarayacak!",
        url: "https://www.notion.so/notionturkiye/CV-Tasla-ad39efe151a745d8849163b04317dc5f",
        action: "Şablona Götür",
        image: Aliskanlik,
        id: 206,
      },
      {
        label: "Kitap Okuma",
        header: "Kitap Okuma Listesi",
        desc: "Eğer siz de benim gibi kitaplara düşkünseniz bu şablon tam sizlik. Hangi kitabı ne zaman okuduğunuzu ya da hangi kitabın hangi sayfasında olduğunuzu izleyebileceğiniz müthiş bir şablon.",
        url: "https://www.notion.so/notionturkiye/CV-Tasla-ad39efe151a745d8849163b04317dc5f",
        action: "Şablona Götür",
        image: Kitap,
        id: 207,
      },
      {
        label: "Medya Takip",
        header: "Medya Takip",
        desc: "Filmlerden kitaplara, çalma listelerinden podcast'lere, oyunlardan makalelere aklınıza gelebilecek her türlü içeriği takip etmenize yarayacak, hangi dizinin hangi bölümdeydim sorusunu ortadan kaldıracak harika bir Notion şablonu.",
        url: "https://www.notion.so/notionturkiye/CV-Tasla-ad39efe151a745d8849163b04317dc5f",
        action: "Şablona Götür",
        image: Medya,
        id: 208,
      },
      {
        label: "Günlük",
        header: "Günlük",
        desc: "Notion günlük tutmak adına muhteşem bir uygulama. Sizin için daha da kolay yapmak adına kendi kullandığım günlük şablonu şimdi sizlerle!",
        url: "https://www.notion.so/notionturkiye/G-nl-k-dcf5252f815b48439317c6c770e5af8f",
        action: "Şablona Götür",
        image: Gunluk,
        id: 209,
      },
      {
        label: "CV",
        header: "CV Taslağı",
        desc: "CV'nizdeki bilgilerle ve CV'nizin tasarımıyla oynayabileceğiniz, isterseniz CV'niz hazır olduğunda Notion üzerinden paylaşabileceğiniz oldukça kullanışlı bir şablon.",
        url: "https://www.notion.so/notionturkiye/CV-Tasla-ad39efe151a745d8849163b04317dc5f",
        action: "Şablona Götür",
        image: Cv,
        id: 210,
      },
    ],
  },
};

export default data;
