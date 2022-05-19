import { TestBed } from '@angular/core/testing';

import { ErrorRedirectInterceptor } from './error-redirect.interceptor';

describe('ErrorRedirectInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorRedirectInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorRedirectInterceptor = TestBed.inject(ErrorRedirectInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
