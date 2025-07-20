interface DesktopWarningTranslations {
  title: string
  subtitle: string
  message: string
  instruction: string
  contact: string
  phone: string
}

interface Translation {
  title: string
  subtitle: string
  loading: string
  allCategories: string
  noPhoto: string
  loadingImage: string
  desktopWarning: DesktopWarningTranslations
}

interface Translations {
  el: Translation
  en: Translation
  bg: Translation
}

export const translations: Translations = {
  el: {
    title: "🔥 Ψητοπωλείο το Πάρκο",
    subtitle: "Ψηφιακό Μενού",
    loading: "Φόρτωση...",
    allCategories: "Όλα",
    noPhoto: "Χωρίς φωτογραφία",
    loadingImage: "Φόρτωση εικόνας...",
    desktopWarning: {
      title: "Ψηφιακό Μενού",
      subtitle: "Ψητοπωλείο το Πάρκο",
      message: "Αυτό το μενού είναι διαθέσιμο μόνο σε κινητές συσκευές.",
      instruction: "Παρακαλούμε ανοίξτε τη σελίδα από το κινητό σας τηλέφωνο ή tablet.",
      contact: "Για περισσότερες πληροφορίες:",
      phone: "Επικοινωνήστε μαζί μας"
    }
  },
  en: {
    title: "🔥 Grill House To Parko",
    subtitle: "Digital Menu",
    loading: "Loading...",
    allCategories: "All",
    noPhoto: "No photo available",
    loadingImage: "Loading image...",
    desktopWarning: {
      title: "Digital Menu",
      subtitle: "Grill House To Parko",
      message: "This menu is available only on mobile devices.",
      instruction: "Please open this page from your mobile phone or tablet.",
      contact: "For more information:",
      phone: "Contact us"
    }
  },
  bg: {
    title: "🔥 Грил Хаус То Парко",
    subtitle: "Дигитално Меню",
    loading: "Зареждане...",
    allCategories: "Всички",
    noPhoto: "Няма снимка",
    loadingImage: "Зареждане на изображение...",
    desktopWarning: {
      title: "Дигитално Меню",
      subtitle: "Грил Хаус То Парко",
      message: "Това меню е достъпно само на мобилни устройства.",
      instruction: "Моля, отворете страницата от вашия мобилен телефон или таблет.",
      contact: "За повече информация:",
      phone: "Свържете се с нас"
    }
  }
} 