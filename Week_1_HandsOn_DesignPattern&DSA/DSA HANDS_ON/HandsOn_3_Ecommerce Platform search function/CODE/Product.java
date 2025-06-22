
import java.util.Arrays;


public class Product{
    int productId;
    String productName;
    String category;

    public Product(int productId,String productName,String category){
        this.productId=productId;
        this.productName=productName;
        this.category=category;

    }
    @Override
    public String toString(){
        return "\nPRODUCT id : "+productId+"\nPRODUCT NAME : "+productName+"\nCATEGORY : "+category;
    }

    public static Product LinearSearch(Product[] products,int targetId){
        for(Product product : products){
            if(product.productId == targetId){
                return product;
            }
        }
        return null;
    }
    public static Product BinarySearch(Product[] products,int targetId){
        int low = 0;
        int high = products.length-1;
        
        while(low<=high){
            int mid = (low + high)/2;
            if(products[mid].productId==targetId){
                return products[mid];
            }
            else if(products[mid].productId<targetId){
                low = mid+1;
            }
            else{
                high = mid-1;
            }
        }
        return null;
    }

}
class SearchDemo{
    public static void main(String[] args) {
        Product[] products={
            new Product(105,"Shoes", "Footwear"),
            new Product(102, "Laptop", "Electronics"),
            new Product(110, "Watch", "Accessories"),
            new Product(101, "Phone", "Electronics"),
            new Product(108, "T-shirt", "Clothing")
        };
        Product result1=Product.LinearSearch(products, 110);
        System.err.println("Linear Search " + (result1 != null ? result1 :"Product not Found"));

        Arrays.sort(products,(a,b) -> Integer.compare(a.productId,b.productId));

        Product result2 = Product.BinarySearch(products, 110);
        System.err.println("\nBinary Search " + (result2 != null ? result2 :"Product not Found"));

    }
}
// Binary Search is more efficient if the product list is sorted by productId and mostly static.

// Linear Search is useful for flexible or dynamic filters (e.g., searching by name or category).

//  Linear Search | O(n)............. Unsorted or sorted array 
//  Binary Search | O(log n)..........Sorted array only      

//  while binary search is a more faster approach but the data must be sorted before applying it that creates more oveheead
//  for this case in an ecommerce platform the chance of the date being sorted is less so the Linear Search is more effecient than Binary Search.