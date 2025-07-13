package com.cognizant.spring_learn;

import org.apache.catalina.core.ApplicationContext;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.slf4j.Logger;

@SpringBootApplication
public class SpringLearnApplication {

	private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {
		LOGGER.debug("Start of Main Method.");
		displayCountry();
		LOGGER.debug("End of Main Method.");
	}

	public static void displayCountry() {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = context.getBean("country", Country.class);
		LOGGER.debug("Country : {}", country.toString());
	}
}
