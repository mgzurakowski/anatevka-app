import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from 'src/app/core/tokens/window.token';

export const NAVIGATOR = new InjectionToken<Navigator>(
    'An abstraction over window.navigator object',
    {
        factory: () => inject(WINDOW).navigator,
    },
);