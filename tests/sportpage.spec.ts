import {expect, test} from "@playwright/test";
import {createPages} from "../pages";
import {cleanupPage, setupPage} from "../setupTest/test-setup";

test.describe.serial('BBC Sport Sayfa Tesi', () => {


    let pages: ReturnType<typeof createPages>;


    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        pages = createPages(page);
    });


    test.afterEach(async ({ page }) => {
        await cleanupPage(page);
    });

    test('Premier League ve BBC puan tablosunun ilk 3 sırasını karşılaştır', async ({ page }) => {

        // Resmi Premier League Puan Tablosu
        const officialTable = await pages.sport.getPremierLeagueOfficialTable();

        // BBC'deki Premier League Puan Tablosunu
        const bbcTable = await pages.sport.getBBCPremierLeagueTable();

        // Karşılaştırma
        for (let i = 0; i < 3; i++) {
            console.log(`Karşılaştırma ${i + 1}:`);
            console.log(`Premier League: ${officialTable[i].team} - ${officialTable[i].points} Puan`);
            console.log(`BBC: ${bbcTable[i].team} - ${bbcTable[i].points} Puan`);

            expect(officialTable[i].team).toBe(bbcTable[i].team);
            expect(officialTable[i].points).toBe(bbcTable[i].points);
        }


    });


});