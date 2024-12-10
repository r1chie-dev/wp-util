class Pages {
      
  options = {
    Admin: [
      { name: "Admin",            redirect: "wp-admin/",                                    value: "admin" },
      { name: "Custom Fields",    redirect: "wp-admin/admin.php?page=wapf-field-groups",    value: "customFields" },
      { name: "New Custom Field", redirect: "wp-admin/post-new.php?post_type=wapf_product", value: "newCustomField" },
      { name: "Products",         redirect: "wp-admin/edit.php?post_type=product",          value: "products" },
      { name: "New Product",      redirect: "wp-admin/post-new.php?post_type=product",      value: "newProduct" },
      { name: "Edit Product",     redirect: "wp-admin/post.php?post={0}&action=edit",       value: "editProduct" },
      { name: "Coupons",          redirect: "wp-admin/edit.php?post_type=shop_coupon",      value: "coupons" },
      { name: "New Coupon",       redirect: "wp-admin/post-new.php?post_type=shop_coupon",  value: "newCoupon" },
      { name: "Orders",           redirect: "wp-admin/edit.php?post_type=shop_order",       value: "orders" },
      { name: "See Order",        redirect: "wp-admin/post.php?post={0}&action=edit",       value: "editOrder" }
    ],
    Frontend: [
      { name: "Home",         redirect: "",                       value:"home" },
      { name: "Cart",         redirect: "cart/",                  value:"cart" },
      { name: "Checkout",     redirect: "checkout/",              value:"checkout" },
      { name: "My Projects",  redirect: "my-account/myprojects/", value:"projects" },
      { name: "My Account",   redirect: "my-account/",            value:"account" }
    ]
  }
  
  alert = new Alert();

  buildHtml() {
    let selectHtml = "";
        
    $.each( this.options, ( pageType, pages ) => {
        selectHtml += "<optgroup label='" + pageType + "'>";

        $.each( pages, ( index, page ) => {
            selectHtml += "<option value='" + page.value + "' data-redirect='" + page.redirect + "'>" +  page.name + "</option>";
        } );

        selectHtml += "</optgroup>";
    } );

    return selectHtml;
  }

  pageChange( value ) {
    if ( $.inArray( value, global.util.optionForIdSearch ) !== -1  ) {
      $( global.util.idSearchWrap ).removeClass( global.util.hiddenClass );
    } else {
        $( global.util.idSearchWrap ).val("").addClass( global.util.hiddenClass );
    }
  }

  openPage() {
    $( global.util.buttonElement ).on( global.util.clickEvent, () => {
      const idToSearchElement = $( global.util.idSearchWrap );
      const clientUrl         = $( global.util.clientsSelect ).val();
      let   pageUrl           = $( global.util.pagesSelect ).find( global.util.optionSelected ).data( global.util.redirectData );

      if ( idToSearchElement.is( global.util.visibleSelector ) ) {
          if ( $( global.util.idSearchInput ).val() !== "" ) {
            pageUrl = this.replaceRedirectId( pageUrl, $( global.util.idSearchInput ).val() );
          } else {
            this.alert.defaultAlert( "noID", "error" );
            return false;
          }
      }

      this.alert.autoClose( "openLink", () => this.openLink( clientUrl + pageUrl ) );
    } );
  }

  replaceRedirectId( url, id ) {
      return url.replace( "{0}", id );
  }

  openLink( link ) {
    window.open( link, global.util.newTabEvent );
  }
}