class GlobalUtil {

    htmlElement         = "html";
    bodyElement         = "body";
    clickEvent          = "click";
    buttonElement       = ".open-client-page";
    pagesSelect         = "#pages-select";
    clientsSelect       = "#clients-select";
    bulbModeIcon        = ".screenMode span";
    lightOnClass        = "lightOn";
    darkModeClass       = "darkMode";
    newTabEvent         = "_blank";
    changeEvent         = "change";
    optionForIdSearch   = [ "editProduct", "editOrder" ];
    redirectData        = "redirect";
    hiddenClass         = "hidden";
    idSearchWrap        = ".id-to-search-wrap";
    idSearchInput       = ".id-to-search";
    visibleSelector     = ":visible";
    optionSelected      = "option:selected";

    getPages() {
        return {
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
    }

    getClients() {
        return {
            Staging: [
              { name: "Demo",                     value: "https://store-demo-staging.sunpics.online/" },
              { name: "Demo Partner 2",           value: "https://store-demo-staging-2.sunpics.online/" },
              { name: "Profox",                   value: "https://staging.profoxprofissional.com.br/" },
              { name: "FotoGM",                   value: "https://store-fotogm-v1-staging.sunpics.online/" },
              { name: "Albume ( Beeriprint )",    value: "https://store-beeriprint-v1-staging.sunpics.online/" },
              { name: "Bepix",                    value: "https://staging.bepix.com.br/" }
            ],
            Production: [
              { name: "Demo",                     value: "https://store-demo.sunpics.online/" },
              { name: "My Album ( Beeriprint )",  value: "https://store-beeri-myalbum-v1.sunpics.online/" },
              { name: "Profox",                   value: "https://profoxprofissional.com.br/" },
              { name: "FotoGM",                   value: "https://foto-gm.si/" },
              { name: "Ceu-Azul",                 value: "https://ceu-azul.pt/" },
              { name: "Albume ( Beeriprint )",    value: "https://new-store.albume.co.il/" },
              { name: "Bepix",                    value: "https://bepix.com.br/" }
            ]
          }
    }
}