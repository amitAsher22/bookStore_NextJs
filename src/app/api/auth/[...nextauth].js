import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; // ספק התחברות עם מייל וסיסמה

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials", // אפשר לשנות את השם כאן אם רוצים
      credentials: {
        email: { label: "Email", type: "text" }, // שדה המייל
        password: { label: "Password", type: "password" }, // שדה הסיסמה
      },
      authorize: async (credentials) => {
        // כאן אתה מבצע את הלוגיקה שלך לבדוק אם המשתמש קיים
        if (
          credentials.email === "amitasher4@gmail.com" &&
          credentials.password === "12345"
        ) {
          return { id: 1, email: credentials.email }; // אם המייל והסיסמה תואמים, מחזירים את המשתמש
        }
        return null; // אם המידע לא נכון, מחזירים null
      },
    }),
  ],
  session: {
    strategy: "jwt", // אחסון המפגש ב-JWT
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // הוספת מזהה המשתמש לטוקן
      }
      return token;
    },
  },
});
