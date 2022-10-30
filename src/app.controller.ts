
import { Get, Controller, Res } from '@nestjs/common';
@Controller()
export class AppController {
  @Get()
  home(@Res() res) {
    res.render('home');
  }

  @Get('/index')
  root(@Res() res) {
    res.render('index');
  }

  @Get('/about')
  about(@Res() res) {
    res.render('about');
  }

  @Get('/contact')
  contact(@Res() res) {
    res.render('contact');
  }
}
