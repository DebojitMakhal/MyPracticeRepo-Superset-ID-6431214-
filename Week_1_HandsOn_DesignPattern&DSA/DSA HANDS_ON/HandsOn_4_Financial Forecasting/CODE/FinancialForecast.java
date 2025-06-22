import java.util.HashMap;
import java.util.Map;

// Recursion is a programming technique where a function calls itself to solve a smaller version of the original problem.

// ---->Problems that naturally break into smaller subproblems (e.g., factorial, Fibonacci, tree traversal).

// ---->Can reduce code complexity but might be less efficient unless optimized (e.g., using memoization).



public class FinancialForecast {

    // Memoization map to store computed values for specific year
    private static Map<Integer, Double> memo = new HashMap<>();

    public static double forecastValue(double presentValue, double growthRate, int years) {
        // Base case
        if (years == 0) {
            return presentValue;
        }

        // Check if already computed
        if (memo.containsKey(years)) {
            return memo.get(years);
        }

        // Recursive call with memoization
        double result = forecastValue(presentValue, growthRate, years - 1) * (1 + growthRate);
        memo.put(years, result);  // Store result for future use

        return result;
    }

    // The recursive function runs in O(n) time, where n = number of years. One recursive call per year.

    // Recursion can be inefficient for larger values due to repeated function calls and stack memory usage.
    // SO TAIL Recursion ot Iterative Approach is more optimized way.
    public static double forecastValueIterative(double presentValue, double growthRate, int years) {
    for (int i = 0; i < years; i++) {
        presentValue *= (1 + growthRate);
    }
    return presentValue;
}

    public static void main(String[] args) {
        double presentValue = 10000.0;   // Initial investment
        double growthRate = 0.05;        // 5% annual growth
        int years = 20;

        double futureValue = forecastValue(presentValue, growthRate, years);
        System.out.printf("\n Forecasted value(Using memoized Recursion) after %d years: ₹%.2f\n", years, futureValue);

        double futureValue1 = forecastValueIterative(presentValue, growthRate, years);
        System.out.printf("\n Forecasted value(Using Tail Recursion) after %d years: ₹%.2f\n", years, futureValue1);
    }
}


