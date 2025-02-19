import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { NewsPage } from './NewsPage';
import { SportPage } from './SportPage';
import { BusinessPage } from './BusinessPage';
import { InnovationPage } from './InnovationPage';
import { CulturePage } from './CulturePage';
import { ArtsPage } from './ArtsPage';
import { TravelPage } from './TravelPage';
import { EarthPage } from './EarthPage';
import { AudioPage } from './AudioPage';
import { VideoPage } from './VideoPage';
import { LivePage } from './LivePage';

// Sayfaları tek bir nesnede toplayalım
export const createPages = (page: Page) => ({
    home: new HomePage(page),
    news: new NewsPage(page),
    sport: new SportPage(page),
    business: new BusinessPage(page),
    innovation: new InnovationPage(page),
    culture: new CulturePage(page),
    arts: new ArtsPage(page),
    travel: new TravelPage(page),
    earth: new EarthPage(page),
    audio: new AudioPage(page),
    video: new VideoPage(page),
    live: new LivePage(page)
});
