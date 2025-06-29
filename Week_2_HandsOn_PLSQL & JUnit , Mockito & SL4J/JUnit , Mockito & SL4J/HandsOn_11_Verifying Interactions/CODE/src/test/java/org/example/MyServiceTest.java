package org.example;

import static org.junit.jupiter.api.Assertions.*;

import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Inject into service
        MyService service = new MyService(mockApi);

        // Step 3: Call the method that should trigger an interaction
        service.fetchData();

        // Step 4: Verify that mockApi.getData() was called
        verify(mockApi).getData();
        verify(mockApi, times(1)).getData();
        verifyNoMoreInteractions(mockApi);

    }
}