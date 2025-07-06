package com.ecommerce.Ecommerce.service;

import com.ecommerce.Ecommerce.model.Product;
import com.ecommerce.Ecommerce.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepo repo;

//    List<Product> products= new ArrayList<>(Arrays.asList(new Product (101,"Iphone",50000), new Product(102,"disc",7000)));

    public List<Product> getproduct(){

        return repo.findAll();
    }


    public Product getProductById(int prodId) {
        return repo.findById(prodId).get();

    }

    public void addProduct(Product product){

        repo.save(product);
    }

    public void updateProduct(Product product) {

        repo.save(product);
    }

    public void deleteProduct(int prodId) {
        repo.deleteById(prodId);
    }
}

