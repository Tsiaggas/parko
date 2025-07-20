# Ψηφιακό Μενού - Ψητοπωλείο το Πάρκο 🔥

Ένα όμορφο, responsive ψηφιακό μενού φτιαγμένο με Next.js, σχεδιασμένο αποκλειστικά για κινητές συσκευές.

## ✨ Χαρακτηριστικά

- 📱 **Μόνο για mobile**: Εμφανίζει warning σε desktop χρήστες
- 🌍 **Δίγλωσσο**: Ελληνικά/Αγγλικά με έξυπνο language toggle
- 🎯 **Απλό UI/UX**: Σχεδιασμένο για χρήστες με ελάχιστη τεχνολογική εμπειρία
- 🔍 **Φίλτρα κατηγοριών**: Εύκολη περιήγηση ανά κατηγορία
- 🖼️ **Εικόνες πιάτων**: Expand/collapse με φωτογραφίες
- 🚀 **Static Export**: Έτοιμο για deploy στο Vercel χωρίς βάση δεδομένων

## 🚀 Εγκατάσταση και Εκκίνηση

```bash
# Εγκατάσταση dependencies
npm install

# Εκκίνηση development server
npm run dev

# Build για production
npm run build
```

## 📁 Προσθήκη Εικόνων

1. Βάλτε τις φωτογραφίες των πιάτων στον φάκελο `public/images/`
2. Χρησιμοποιήστε το "slug" του πιάτου ως όνομα αρχείου:
   - `souvlaki.jpg` για το "Σουβλάκι"
   - `tzatziki.png` για το "Τζατζίκι"
   - `xoriatiki.webp` για τη "Χωριάτικη"

### Υποστηριζόμενες μορφές:
- JPG/JPEG
- PNG
- WebP

### 📸 Tips για φωτογραφίες:
- **Aspect Ratio**: Η εφαρμογή είναι βελτιστοποιημένη για Portrait φωτογραφίες (4:3)
- **Μέγεθος**: Ιδανικό 400x533 pixels ή μεγαλύτερο
- **Ποιότητα**: Κρατήστε το μέγεθος αρχείου κάτω από 500KB
- **Hover Effect**: Οι φωτογραφίες έχουν subtle zoom effect στο hover

### 🎨 Custom Image Adjustments:

Για εικόνες που χρειάζονται ειδική προσαρμογή, επεξεργαστείτε το `imageAdjustments.js`:

```javascript
export const imageAdjustments = {
  'slug-name': {
    objectPosition: 'center 60%',  // Positioning
    objectFit: 'contain',          // cover/contain
    backgroundColor: '#f9fafb'     // Background για contain
  }
}
```

**Παραδείγματα:**
- `pikantiki`: Κατέβασμα προς τα κάτω για καλύτερη θέαση
- `florinis-gemisti`: Zoom out για κάθετα προϊόντα

## 🌍 Γλώσσες

Το μενού υποστηρίζει:
- 🇬🇷 **Ελληνικά** (`menu.json`)
- 🇬🇧 **Αγγλικά** (`menu-en.json`)

Οι χρήστες μπορούν να εναλλάσσονται μεταξύ των γλωσσών με το toggle button στην κορυφή.

## 📝 Επεξεργασία Μενού

Επεξεργαστείτε τα αρχεία `menu.json` (ελληνικά) και `menu-en.json` (αγγλικά) για να προσθέσετε/αφαιρέσετε πιάτα ή κατηγορίες:

```json
{
  "categories": [
    {
      "title": "Κατηγορία",
      "items": [
        { 
          "name": "Όνομα Πιάτου", 
          "price": 9.99, 
          "slug": "onoma-piatou" 
        }
      ]
    }
  ]
}
```

## 🌐 Deploy στο Vercel

1. Push το project σε GitHub repository
2. Συνδέστε το στο Vercel
3. Το site θα είναι διαθέσιμο αυτόματα!

## 🛠️ Τεχνολογίες

- **Next.js 14** με App Router
- **TypeScript** για type safety
- **Tailwind CSS** για styling
- **Static Export** για hosting χωρίς server

## 📱 Preview

- **Desktop**: Εμφανίζει μήνυμα ότι είναι διαθέσιμο μόνο σε mobile
- **Mobile**: Πλήρες λειτουργικό μενού με φίλτρα και εικόνες

## 🎨 Χρωματική Παλέτα

- **Warm Orange** (#ff6b35): Κουμπιά και τιμές
- **Warm Cream** (#fff8f5): Φόντο
- **Warm Brown** (#8b4513): Τίτλοι
- **Warm Gray** (#f5f5f5): Cards

---

## 👥 Credits

- **💻 Development**: [Sakis Tsiaggas](https://github.com/tsiaggas)
- **📸 Photography**: Κωνσταντίνος Δρουμαλιάς

---

🔥 **Καλή επιτυχία με το ψητοπωλείο σας!** 