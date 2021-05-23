import request from './request.js';

// eslint-disable-next-line import/prefer-default-export
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    },
  });
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.price = itemInfo.price;
    this.discountBgColor = itemInfo.discountBgColor;
    this.discountDesc = itemInfo.discountDesc;

    this.columns = columns;

    this.services = services;
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.score = shopInfo.score;
    this.goods = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
    this.name = shopInfo.name;
  }
}
