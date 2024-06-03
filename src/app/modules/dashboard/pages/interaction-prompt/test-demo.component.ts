import { Component, OnInit, ViewEncapsulation } from '@angular/core';



let PROMPT = [
  {
    prompt : "Start Lorem ipsum dolor sit amet consectetur   adipisicing elit. Distinctio di  End",
    response : "	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi vero excepturi molestiae quod, cum eligendi, blanditiis nobis sit ratione facilis perspiciatis totam ipsum consectetur earum, harum aliquid quibusdam sapiente omnis velit deleniti iure? Optio magnam temporibus ex earum libero hic nobis odio provident assumenda sunt, quod impedit nulla, harum ratione placeat explicabo delectus porro doloribus? Quos ratione voluptatibus libero soluta veritatis maiores facere repudiandae, aliquam possimus beatae consequuntur. Sit numquam ut iste similique nisi deleniti. Consectetur beatae voluptatem voluptatum fugiat sapiente esse iure porro aliquam, iusto nemo facilis ut iste in numquam amet natus? A consequatur totam itaque nam ea modi laudantium, eum cum beatae aspernatur laboriosam ab ipsum libero vel recusandae, quaerat quo tempore magni alias? Eveniet rerum laboriosam voluptates aliquid. Labore pariatur ullam dicta commodi placeat nobis consequatur vero reprehenderit quos, sunt iusto expedita illo totam perferendis delectus est ipsam esse itaque provident? Veritatis rerum aperiam suscipit ad animi delectus illum accusantium reiciendis adipisci nobis at, autem, error neque quasi, nostrum nesciunt voluptas labore provident quas placeat ipsam? Dolore unde, ex suscipit fugit consequuntur saepe, sapiente necessitatibus debitis voluptatem praesentium repudiandae, beatae esse eveniet! Voluptas velit numquam laboriosam optio provident sunt, sequi, consectetur officiis et quia nemo atque?"
  },
  {
    prompt : "Start Lorem ipsum dolor sit amet consectetur   adipisicing elit. Distinctio di  End",
    response : "	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi vero excepturi molestiae quod, cum eligendi, blanditiis nobis sit ratione facilis perspiciatis totam ipsum consectetur earum, harum aliquid quibusdam sapiente omnis velit deleniti iure? Optio magnam temporibus ex earum libero hic nobis odio provident assumenda sunt, quod impedit nulla, harum ratione placeat explicabo delectus porro doloribus? Quos ratione voluptatibus libero soluta veritatis maiores facere repudiandae, aliquam possimus beatae consequuntur. Sit numquam ut iste similique nisi deleniti. Consectetur beatae voluptatem voluptatum fugiat sapiente esse iure porro aliquam, iusto nemo facilis ut iste in numquam amet natus? A consequatur totam itaque nam ea modi laudantium, eum cum beatae aspernatur laboriosam ab ipsum libero vel recusandae, quaerat quo tempore magni alias? Eveniet rerum laboriosam voluptates aliquid. Labore pariatur ullam dicta commodi placeat nobis consequatur vero reprehenderit quos, sunt iusto expedita illo totam perferendis delectus est ipsam esse itaque provident? Veritatis rerum aperiam suscipit ad animi delectus illum accusantium reiciendis adipisci nobis at, autem, error neque quasi, nostrum nesciunt voluptas labore provident quas placeat ipsam? Dolore unde, ex suscipit fugit consequuntur saepe, sapiente necessitatibus debitis voluptatem praesentium repudiandae, beatae esse eveniet! Voluptas velit numquam laboriosam optio provident sunt, sequi, consectetur officiis et quia nemo atque?"
  },
  {
    prompt : "Start Lorem ipsum dolor sit amet consectetur   adipisicing elit. Distinctio di  End",
    response : "	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi vero excepturi molestiae quod, cum eligendi, blanditiis nobis sit ratione facilis perspiciatis totam ipsum consectetur earum, harum aliquid quibusdam sapiente omnis velit deleniti iure? Optio magnam temporibus ex earum libero hic nobis odio provident assumenda sunt, quod impedit nulla, harum ratione placeat explicabo delectus porro doloribus? Quos ratione voluptatibus libero soluta veritatis maiores facere repudiandae, aliquam possimus beatae consequuntur. Sit numquam ut iste similique nisi deleniti. Consectetur beatae voluptatem voluptatum fugiat sapiente esse iure porro aliquam, iusto nemo facilis ut iste in numquam amet natus? A consequatur totam itaque nam ea modi laudantium, eum cum beatae aspernatur laboriosam ab ipsum libero vel recusandae, quaerat quo tempore magni alias? Eveniet rerum laboriosam voluptates aliquid. Labore pariatur ullam dicta commodi placeat nobis consequatur vero reprehenderit quos, sunt iusto expedita illo totam perferendis delectus est ipsam esse itaque provident? Veritatis rerum aperiam suscipit ad animi delectus illum accusantium reiciendis adipisci nobis at, autem, error neque quasi, nostrum nesciunt voluptas labore provident quas placeat ipsam? Dolore unde, ex suscipit fugit consequuntur saepe, sapiente necessitatibus debitis voluptatem praesentium repudiandae, beatae esse eveniet! Voluptas velit numquam laboriosam optio provident sunt, sequi, consectetur officiis et quia nemo atque?"
  },
  {
    prompt : "Start Lorem ipsum dolor sit amet consectetur   adipisicing elit. Distinctio di  End",
    response : "	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi vero excepturi molestiae quod, cum eligendi, blanditiis nobis sit ratione facilis perspiciatis totam ipsum consectetur earum, harum aliquid quibusdam sapiente omnis velit deleniti iure? Optio magnam temporibus ex earum libero hic nobis odio provident assumenda sunt, quod impedit nulla, harum ratione placeat explicabo delectus porro doloribus? Quos ratione voluptatibus libero soluta veritatis maiores facere repudiandae, aliquam possimus beatae consequuntur. Sit numquam ut iste similique nisi deleniti. Consectetur beatae voluptatem voluptatum fugiat sapiente esse iure porro aliquam, iusto nemo facilis ut iste in numquam amet natus? A consequatur totam itaque nam ea modi laudantium, eum cum beatae aspernatur laboriosam ab ipsum libero vel recusandae, quaerat quo tempore magni alias? Eveniet rerum laboriosam voluptates aliquid. Labore pariatur ullam dicta commodi placeat nobis consequatur vero reprehenderit quos, sunt iusto expedita illo totam perferendis delectus est ipsam esse itaque provident? Veritatis rerum aperiam suscipit ad animi delectus illum accusantium reiciendis adipisci nobis at, autem, error neque quasi, nostrum nesciunt voluptas labore provident quas placeat ipsam? Dolore unde, ex suscipit fugit consequuntur saepe, sapiente necessitatibus debitis voluptatem praesentium repudiandae, beatae esse eveniet! Voluptas velit numquam laboriosam optio provident sunt, sequi, consectetur officiis et quia nemo atque?"
  },
  {
    prompt : "Start Lorem ipsum dolor sit amet consectetur   adipisicing elit. Distinctio di  End",
    response : "	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi vero excepturi magni alias? Eveniet rerum laboriosam voluptates aliquid. Labore pariatur ullam dicta commodi placeat nobis consequatur vero reprehenderit quos, sunt iusto expedita illo totam perferendis delectus est ipsam esse itaque provident? Veritatis rerum aperiam suscipit ad animi delectus illum accusantium reiciendis adipisci nobis at, autem, error neque quasi, nostrum nesciunt voluptas labore provident quas placeat ipsam? Dolore unde, ex suscipit fugit consequuntur saepe, sapiente necessitatibus debitis voluptatem praesentium repudiandae, beatae esse eveniet! Voluptas velit numquam laboriosam optio provident sunt, sequi, consectetur officiis et quia nemo atque?"
  },
  {
    prompt : "Let talk about gpt",
    response : "	Sofware perspiciatis totam ipsum consectetur earum,arum ratione placeat explicabo delectus porro doloribus? Quos ratione voluptatibus libero soluta veritatis maiores facere repudiandae, aliquam possimus beatae consequuntur. Sit numquam ut iste similique nisi deleniti. Consectetur beatae voluptatem voluptatum fugiat sapiente esse iure porro aliquam, iusto nemo facilis ut iste in numquam amet natus? A consequatur totam itaque nam ea modi laudantium, eum cum beatae aspernatur laboriosam ab ipsum libero vel recusandae, quaerat quo tempore magni alias? Eveniet rerum laboriosam voluptates aliquid. Labore pariatur ullam dicta commodi placeat nobis consequatur vero reprehenderit quos, sunt iusto expedita illo totam perferendis delectus est ipsam esse itaque provident? Veritatis rerum aperiam suscipit ad animi delectus illum accusantium reiciendis adipisci nobis at, autem, error neque quasi, nostrum nesciunt voluptas labore provident quas placeat ipsam? Dolore unde, ex suscipit fugit consequuntur saepe, sapiente necessitatibus debitis voluptatem praesentium repudiandae, beatae esse eveniet! Voluptas velit numquam laboriosam optio provident sunt, sequi, consectetur officiis et quia nemo atque?"
  },
  
]

@Component({
  selector: 'app-test-demo',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
  encapsulation : ViewEncapsulation.None
})


export class TestDemoComponent implements OnInit {

  opened : Boolean = true;
  MESSAGE_ENGAGEMENT = PROMPT;

  constructor() { }

  ngOnInit(): void {
  }


  sendMessage(){

  }

}
