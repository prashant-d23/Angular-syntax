// Sure, here's the syntax for setting data in Angular using session storage, local storage, and cookies:

// **Session Storage:**

// ```typescript
// Set data in session storage
sessionStorage.setItem('key', 'value');


// **Local Storage:**


// Set data in local storage
localStorage.setItem('key', 'value');


// **Cookies:**

// To set a cookie, you typically use a library like `ngx-cookie-service` in Angular:

// 1. Install the library:
 
//    npm install ngx-cookie-service
   
// 2. In your Angular component or service:

// typescript
import { CookieService } from 'ngx-cookie-service';

constructor(private cookieService: CookieService) { }

// Set a cookie
this.cookieService.set('key', 'value', expirationInSeconds, '/', 'example.com', true, 'Lax');


// - `'key'`: The name of the cookie.
// - `'value'`: The value you want to store.
// - `expirationInSeconds`: The time in seconds after which the cookie will expire.
// - `'/'`: The path for which the cookie is valid (use `'/'` for the whole domain).
// - `'example.com'`: The domain where the cookie is valid.
// - `true`: Marks the cookie as "secure" (requires HTTPS).
// - `'Lax'`: The SameSite attribute of the cookie (optional).

// Remember to adjust the options and values according to your specific use case.

// Please note that the syntax for setting data in session storage and local storage is straightforward, while setting cookies involves additional configuration and considerations. Additionally, cookies offer more advanced options for managing attributes like expiration, domain, and security flags.

// Make sure to consult the documentation of the specific libraries you're using for session storage, local storage, or cookies for any additional details or options.