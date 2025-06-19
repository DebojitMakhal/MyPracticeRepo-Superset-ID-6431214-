public class Singleton {
    private static final Singleton instance = new Singleton();

    private Singleton() {
        System.out.println("A Singleton instance is created");
    }

    public static Singleton getInstance() {
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello from an instance");
    }
}

class Main {
    public static void main(String[] args) {
        Singleton s1 = Singleton.getInstance();
        Singleton s2 = Singleton.getInstance();

        s1.showMessage();

        System.out.println("Are both instances same? " + (s1 == s2));
    }
}
