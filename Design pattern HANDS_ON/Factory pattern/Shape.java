
public interface Shape{
    void draw();
}

class Circle implements Shape{
    public void draw(){
        System.out.println("Drawing a Circle...");
    }
}
class Rectangle implements  Shape{
    public void draw(){
        System.out.println("Drawing a Rectangle...");
    }
}

class ShapeFactory {
    public Shape getShape(String shapetype){
        if(shapetype == null) return null;
        if (shapetype.equalsIgnoreCase("Circle")){
            return new Circle();
        }
        if (shapetype.equalsIgnoreCase("Rectangle")){
            return new Rectangle();
        }
        return null;
    }
}
class Main2{
    public static void main(String[] args){
        ShapeFactory factory = new ShapeFactory();

        Shape s1= factory.getShape("Circle");
        s1.draw();

        Shape s2= factory.getShape("Rectangle");
        s2.draw();

    }
}