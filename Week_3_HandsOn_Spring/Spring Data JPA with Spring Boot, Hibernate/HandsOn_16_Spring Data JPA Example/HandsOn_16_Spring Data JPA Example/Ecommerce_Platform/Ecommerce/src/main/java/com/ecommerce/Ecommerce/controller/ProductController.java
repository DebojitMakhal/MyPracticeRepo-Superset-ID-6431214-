package com.ecommerce.Ecommerce.controller;

import com.ecommerce.Ecommerce.model.Product;
import com.ecommerce.Ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class ProductController {
    @Autowired
    private ProductService service;


    @RequestMapping("/products")
    public List<Product> getProducts(){
        return service.getproduct();
    }
    @RequestMapping("/products/{prodId}")
    public Product getProductById(@PathVariable int prodId){
        return service.getProductById(prodId);
    }
    @PostMapping("/products")
    public void addProduct(@RequestBody Product product){
        System.out.println(product);
        service.addProduct(product);

    }
    @PutMapping("/products")
    public void updateProduct(@RequestBody Product product){
        service.updateProduct(product);
    }

    @DeleteMapping("/products/{prodId}")
    public void deleteProduct(@PathVariable int prodId){
        service.deleteProduct(prodId);
    }
}
