import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class AssertionsTestTest {
    @Test
    public void testAssertions() {
        // ✅ Assert that two values are equal
        assertEquals(5, 2 + 3, "2 + 3 should be equal to 5");

        // ✅ Assert that a condition is true
        assertTrue(5 > 3, "5 is greater than 3");

        // ✅ Assert that a condition is false
        assertFalse(5 < 3, "5 is not less than 3");

        // ✅ Assert that an object is null
        assertNull(null, "Object should be null");

        // ✅ Assert that an object is not null
        assertNotNull(new Object(), "Object should not be null");
    }
}