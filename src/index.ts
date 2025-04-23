type book = {
  title: string;
  author: {
    name: string,
    birthYear: number
  },
  isAvailable: boolean,
  tags: string[],
  rating: number,
  pages: number
};

// 👤 Exemple d'utilisateur à typer
type borrower = {
  id: number,
  fullName: string,
  active: boolean,
  borrowedBooks: [book],
  lastBorrowed: Date
};

// 🧠 À toi de compléter les types ci-dessous :

// ✅ Paramètre : book (objet représentant un livre)
// ✅ Retour : string
function getBookTitle(book: book): string {
  return book.title;
}

// ✅ Paramètre : book
// ✅ Retour : number
function getPageCount(book: book): number {
  return book.pages;
}

// ✅ Paramètre : book
// ✅ Retour : boolean
function isAvailable(book: book): boolean {
  return book.isAvailable;
}

// ✅ Paramètre : author (objet avec name et birthYear)
// ✅ Retour : boolean
function isAuthorAlive(author: book['author']): boolean {
  const currentYear = new Date().getFullYear();
  return currentYear - author.birthYear < 100;
}

// ✅ Paramètre : book
// ✅ Retour : string[]
function listTags(book:book): string[] {
  return book.tags;
}

// ✅ Paramètre : borrower
// ✅ Retour : string
function getBorrowerName(borrower:borrower): string {
  return borrower.fullName;
}

// ✅ Paramètre : borrower
// ✅ Retour : boolean
function hasBorrowedBooks(borrower: borrower): boolean {
  return borrower.borrowedBooks.length > 0;
}

// ✅ Paramètre : borrower
// ✅ Retour : Date
function getLastBorrowedDate(borrower: borrower): Date {
  return borrower.lastBorrowed;
}

// ✅ Paramètre : borrower
// ✅ Retour : objet contenant id et nombre de livres
// ✅ Exemple attendu : { id: 123, totalBooks: 1 }
function getBorrowerSummary(borrower:borrower): {id: number, totalBooks: number} {
  return {
    id: borrower.id,
    totalBooks: borrower.borrowedBooks.length
  };
}

// ✅ Paramètre : borrower
// ✅ Retour : tableau des titres de ses livres (string[])
function getBorrowedTitles(borrower:borrower): string[] {
  return borrower.borrowedBooks.map(book => book.title);
}


// 🧩 Exercice 2 – Crée les types/interfaces


// 👉 Résultat attendu : le code compile si tu crées bien les types 
type User = {
  id: number;
  username: string;
  role: string;
  profile? : {
    bio: string;
    website: string
  }
}
const user1: User = {
  id: 1,
  username: "devadrien",
  role: "admin",
  profile: {
    bio: "Développeur fullstack",
    website: "https://adrien.dev"
  }
};

const user2: User = {
  id: 2,
  username: "bobthetester",
  role: "user"
};

// ✅ Fonction : accepte un User, ne retourne rien
function printUserRole(user: User) {
  console.log(`${user.username} a le rôle ${user.role}`);
}

// ✅ Fonction : retourne true si l'utilisateur a un profil
function hasProfile(user: User): boolean {
  return "profile" in user;
}