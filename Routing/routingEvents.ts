
// Certainly, there are nine navigation events in Angular that you can subscribe to using the `router.events` observable. Here's a list of all nine navigation events:

// 1. **NavigationStart**: Fired when navigation starts. It provides information about the target URL and any extra state data.

// 2. **NavigationEnd**: Fired when navigation ends successfully. It provides information about the target URL and any extra state data.

// 3. **NavigationCancel**: Fired when navigation is canceled. It provides information about the target URL and any extra state data.

// 4. **NavigationError**: Fired when navigation encounters an error. It provides information about the error and the target URL.

// 5. **RoutesRecognized**: Fired when the router has recognized the target routes. It provides information about the activated routes.

// 6. **GuardsCheckStart**: Fired when guards are about to be checked.

// 7. **GuardsCheckEnd**: Fired when guards have been checked.

// 8. **ResolveStart**: Fired when route data is about to be resolved.

// 9. **ResolveEnd**: Fired when route data has been resolved.

// Here's an example of how you can subscribe to all nine navigation events and log information about each event:

// ```typescript
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized, GuardsCheckStart, GuardsCheckEnd, ResolveStart, ResolveEnd } from '@angular/router';

constructor(private router: Router) {
  router.events.subscribe((event) => {
    if (event instanceof NavigationStart) {
      console.log('Navigation started');
      console.log('Target URL:', event.url);
      console.log('Navigation extras:', event.navigationTrigger);
    } else if (event instanceof NavigationEnd) {
      console.log('Navigation ended successfully');
      console.log('Target URL:', event.url);
      console.log('Navigation extras:', event.navigationTrigger);
    } else if (event instanceof NavigationCancel) {
      console.log('Navigation canceled');
      console.log('Target URL:', event.url);
      console.log('Navigation extras:', event.navigationTrigger);
    } else if (event instanceof NavigationError) {
      console.error('Navigation error');
      console.error('Error:', event.error);
      console.log('Target URL:', event.url);
    } else if (event instanceof RoutesRecognized) {
      console.log('Routes recognized');
      console.log('Activated routes:', event.state.root.firstChild);
    } else if (event instanceof GuardsCheckStart) {
      console.log('Guards check started');
    } else if (event instanceof GuardsCheckEnd) {
      console.log('Guards check ended');
    } else if (event instanceof ResolveStart) {
      console.log('Resolve started');
    } else if (event instanceof ResolveEnd) {
      console.log('Resolve ended');
    }
  });
}


// By subscribing to these events, you can perform various actions based on the navigation flow in your Angular application.
  
  
  
  