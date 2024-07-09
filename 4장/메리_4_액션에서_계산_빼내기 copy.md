## Advantages
> 🙆‍♀️ 동작하면 배포한다!

### 테스트를 쉽게 만드는 조건
- DOM 업데이트와 비즈니스 규칙은 분리되어야 한다.
- 전역변수가 없어야 한다.

### 리팩터링 방법
- 서브루틴 추출하기 (extract subroutine)
  - 코드의 일부분을 별도의 메서드나 함수로 분리하여 코드의 가독성과 재사용성을 높이는 방법

## 연습 문제 (p.79)
### AS-IS
```javascript
function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.10);
}
```

### TO-BE
```javascript
function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cart_total));
}

function calc_tax(total) {
  return total * 0.10;
}
```

## 연습 문제 (p.82)
### AS-IS
```javascript
function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();

  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;

    if (item.price + shopping_cart_total >= 20) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}
```

### TO-BE
```javascript
function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();

  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;

    if () {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

function is_free_shipping(total, item_price) {
  return item_price + total >= 20;
}
```

## 궁금한 점
1. 함수를 재사용하기 위해서 함수가 결괏값을 리턴해야 한다는데 왜 그럴까? 🤔 
  - 리턴값 외 다른 출력 (= 암묵적 출력) 을 없애기 위함인가? 결괏값을 리턴한다고 암묵적 출력이 없어지는 것은 아닌데...

