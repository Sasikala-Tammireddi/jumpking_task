import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  public slideArray: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7];
  public categories: Array<any> = [];
  public shopPopularCategories: Array<string> = [];
  public styles: any = {};

  constructor() { }

  ngOnInit() {
    this.categories = this.getCategories();
    this.shopPopularCategories = this.getShopPopularCategories();
    this.styles = this.getStyles();
  }

  getCategories(): Array<any> {
    return [
      {
        category: "MEN",
        thumbnail: "https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/5/15/a028733f-5da9-4d2e-996c-e4b2ff1b4b0b1589521938037-circular-top-nav_01-06.jpg"
      },
      {
        category: "WOMEN",
        thumbnail: "https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/5/15/4fe17086-221c-4447-98f8-f61ee055ad5a1589521938083-circular-top-nav_01-08.jpg"
      },
      {
        category: "KIDS",
        thumbnail: "https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/5/15/8dfafa1f-d4c7-48b9-be6d-6b722add924c1589521938133-circular-top-nav_01-10.jpg"
      },
      {
        category: "BEAUTY",
        thumbnail: "https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/5/15/a071479f-d43c-4d6b-a226-f99bb1dd6d491589521938231-circular-top-nav_01-14.jpg"
      },
      {
        category: "HOME",
        thumbnail: "https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/5/15/1ab06207-8406-4758-b6f4-1313de557ee21589521938189-circular-top-nav_01-12.jpg"
      },
      {
        category: "ESSENTIALS",
        thumbnail: "https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/5/15/ce2696bb-a849-4b03-8c6b-3e4879b675741589521938278-circular-top-nav_01-18.jpg"
      },
      {
        category: "JEWELLERY",
        thumbnail: "https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/5/15/bf4b4378-3525-4e8a-9be7-913ced0a9f0e1589521938331-circular-top-nav_01.jpg"
      },
      {
        category: "GADGETS",
        thumbnail: "https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/retaillabs/2020/5/15/68f978f6-54d2-4cbc-b07d-d2d8691a69461589522873147-GADGETS.jpg"
      },
    ];
  }

  getShopPopularCategories(): Array<string> {
    return ["https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/9/9353834d-5de8-4a59-8591-66d69e50f1fa1594275997755-Kurta-Sets.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/9/462580ea-b042-49d6-91a7-f6cfbf9e465e1594275998088-Tops-_-T-Shirts.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/9/52c955f4-07ee-4741-869a-39e3777ee53a1594275997498-Flats-_-Heels.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/9/0047cd84-017a-4afa-9a57-8e419d835b761594275997796-Kurtas.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/9/a6b2ba17-6de2-4d1f-b374-5923eabcc40d1594275997717-Kidswear.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/9/d46ce696-d4bd-4957-bcdb-8dd4c6d3a2851594275998033-Sports-Shoes.jpg"];
  }

  getStyles(): any {
    return {
      women: ["https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2020/7/10/14615e1b-ed68-434c-86a2-69b5500235be1594330710665-Tops-T-shirt.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/32a4536e-bbbc-4122-bb66-a1d0ccdaf9f71594222967609-Sports-shoes.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/1cbccd5f-1e14-492f-b88d-5b7fd370154a1594222967562-Shorts-_-Trousers.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/9aaaf98b-be17-40fc-a907-f6adae3070f41594222967319-Loungewear.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg"],
      men: ["https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/83043dc5-e058-433f-a11b-ab5f3142ef9f1594222908401-Trackpants_.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/d42c9447-1a5e-4d8a-89fa-56cb14a365b51594222908303-Sports-Shoes.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/56a5cc0b-87a8-40ce-8c4d-009acc2cbe851594222907898-Innerwear-.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/a4dcf7ba-f6fa-4a28-a409-0db63cca9f0b1594222907684-Flipflops.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg"],
      kids: ["https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/870d0dc1-c128-4e2a-b70a-2e29c1187bcb1594222834017-Dresses.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/18eb31db-8dcb-4efa-b92d-61c8ebe0ee811594222834368-Shorts.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg"],
    };
  }
}
