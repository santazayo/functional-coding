let shopping_cart = []; // 장바구니 제품과 금액 합계를 담고 있는 전역변수
let shopping_cart_total = 0; // 장바구니 금액 합계를 담고 있는 전역변수

/**
 * 1. 연습문제
 */
const add_item_to_cart = (name, price) => {
	shopping_cart = add_item(shopping_cart, name, price);
	shopping_cart_total = calc_cart_total(shopping_cart);
	dom_update();
}

const calc_cart_total = cart => {
	return cart.reduce((acc, item) => acc + item.price, 0);
};

const dom_update = () => {
	set_cart_total_dom(); // 금액 합계를 반영하기 위해 DOM 업데이트
	update_shipping_icons(); // 아이콘을 업데이트하는 코드 추가
	update_tax_dom(); // 페이지에 세금을 업데이트하기 위한 코드 추가
}

/**
 *
 * 함수가 결괏값을 리턴
 * 전역 변수에 의존 하지 않음
 * dom을 직접 조작하지 않음
 */
const add_item = (cart, name, price) => {
	const new_cart = cart.slice(); // 배열을 복사하는 방법
	return new_cart.push({name, price});
}

/**
 * 2. 연습문제
 */

/**
 * 계산 추출을 단계별로 알아보기
 * 1. 계산 코드를 찾아 뺴기
 * 2. 새 함수에 암문적 입력과 출력을 찾기
 * 3. 암묵적 입력은 인자로, 암묵적 출력은 리턴값으로 변경
 */
const update_tax_dom = () => {
	set_tax_dom(calc_tax(shopping_cart_total));
}
const calc_tax = (total) => {
	return total * 0.1;
}

/**
 * 3. 연습문제
 */

const update_shipping_icons = () => {
	const buy_buttons = get_buy_buttons_dom();
	buy_buttons.forEach(button => {
		const item = button.item;
		if (calc_free_shipping(item.price, shopping_cart_total)) {
			button.show_shipping_icon();
		} else {
			button.hide_shipping_icon();
		}
	});
}

const calc_free_shipping = (price, total) => {
	return price + total >= 20;
}
