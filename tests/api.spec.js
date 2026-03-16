// @ts-check
import { test, expect } from '@playwright/test';

test('Test API - GET single item', async ({ page, request }) => {

  const response = await request.get('/api/index.php?endpoint=products&id=2');

  expect(response.status()).toBe(200);

  //console.log(await response.text());

  expect(await response.text()).toContain('{"id":2,"name":"Eliksir Energii","price":39.99,"currency":"PLN","display_price":"39.99 zł"}')
});

test('Test API - POST', async ({ request }) => {
  const response = await request.post('/api/index.php?endpoint=products', {
      data: {
          "name": "Buty speedrun",
          "price": 79.99,
          "currency": "PLN"
      }
  });
  expect(response.status()).toBe(201);
  expect(response.ok()).toBeTruthy();
  console.log(await response.text())
  expect(await response.text()).toContain('"created (mock)\",\"product\":{\"name\":\"Buty speedrun\"')

});