import junit.framework.TestCase;
import org.example.Calculator;

import static org.junit.Assert.assertEquals;

public class CalculatorTestTest extends TestCase {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.add(2, 3));
    }
}