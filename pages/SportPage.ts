import {Page} from '@playwright/test';

export class SportPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async isSportLogoVisible() {
        const SportLogo = await this.page.locator('//div[@class=\'ssrcss-kpltdl-LogoWrapper esbu9dd5\']');
        return await SportLogo.isVisible();
    }

    async clickHomeCategory() {
        await this.page.locator('//span[text()=\'Home\']').first().click();
    }

    async getPremierLeagueOfficialTable() {


        await this.page.goto('https://www.premierleague.com/tables');

        const firstTeamName = await this.page.locator('//span[@class=\'league-table__team-name league-table__team-name--long long\']').first().textContent();
        const firstTeamPoint = await this.page.locator('//td[@class=\'league-table__points points\']').first().textContent();

        const secondTeamName = await this.page.locator('//span[@class=\'league-table__team-name league-table__team-name--long long\']').nth(1).textContent();
        const secondTeamPoint = await this.page.locator('//td[@class=\'league-table__points points\']').nth(1).textContent();

        const thirdTeamName = await this.page.locator('//span[@class=\'league-table__team-name league-table__team-name--long long\']').nth(2).textContent();
        const thirdTeamPoint = await this.page.locator('//td[@class=\'league-table__points points\']').nth(2).textContent();


        return [
            { team: firstTeamName.trim(), points: firstTeamPoint.trim() },
            { team: secondTeamName.trim(), points: secondTeamPoint.trim() },
            { team: thirdTeamName.trim(), points: thirdTeamPoint.trim() }
        ];

    }

    async getBBCPremierLeagueTable() {
        await this.page.goto('https://www.bbc.com/sport/football/premier-league/table');

        const firstTeamName = await this.page.locator('//div[@class=\'ssrcss-3u4qof-Team eod5afi5\']').first().textContent();
        const firstTeamPoint = await this.page.locator('//span[@class=\'ssrcss-du60gv-Points eod5afi2\']').first().textContent();

        const secondTeamName = await this.page.locator('//div[@class=\'ssrcss-3u4qof-Team eod5afi5\']').nth(1).textContent();
        const secondTeamPoint = await this.page.locator('//span[@class=\'ssrcss-du60gv-Points eod5afi2\']').nth(1).textContent();

        const thirdTeamName = await this.page.locator('//div[@class=\'ssrcss-3u4qof-Team eod5afi5\']').nth(2).textContent();
        const thirdTeamPoint = await this.page.locator('//span[@class=\'ssrcss-du60gv-Points eod5afi2\']').nth(2).textContent();

        return [
            { team: firstTeamName.trim(), points: firstTeamPoint.trim() },
            { team: secondTeamName.trim(), points: secondTeamPoint.trim() },
            { team: thirdTeamName.trim(), points: thirdTeamPoint.trim() }
        ];
    }


}