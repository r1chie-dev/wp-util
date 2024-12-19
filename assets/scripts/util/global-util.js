class GlobalUtil {

    htmlElement                     = "html";
    bodyElement                     = "body";
    clickEvent                      = "click";
    buttonElement                   = ".open-client-page";
    pagesSelect                     = "#pages-select";
    pagesTypeSelect                 = "#pages-type-select";
    clientsSelect                   = "#clients-select";
    clientsTypeSelect               = "#clients-type-select";
    bulbModeIcon                    = ".screenMode span";
    lightOnClass                    = "lightOn";
    darkModeClass                   = "darkMode";
    newTabEvent                     = "_blank";
    changeEvent                     = "change";
    optionForIdSearch               = [ "editProduct", "editOrder", "editExtraPages", "editBoxExtraPages" ];
    redirectData                    = "redirect";
    hiddenClass                     = "hidden";
    idSearchWrap                    = ".id-to-search-wrap";
    idSearchInput                   = ".id-to-search";
    visibleSelector                 = ":visible";
    optionSelected                  = "option:selected";
    clientsTypeStg                  = "staging";
    clientsTypeProd                 = "production";
    pagesTypeAdmin                  = "admin";
    pagesTypeFrontend               = "frontend";
    pagesTypeSunpicsAttributes      = "sunpicsAttributes";
    pagesTypeSunpicsConfigurations  = "sunpicsConfigurations";
    pagesTypeSunpicsGalleries       = "sunpicsGalleries";
    pagesTypeExtraPages             = "extraPages";

    //#region gets
    getClientsType() {
      return [
        { name: "Staging",    value: "staging" },
        { name: "Production", value: "production" }
      ];
    }

    getPagesType() {
      return [
        { name: "Admin",    value: "admin" },
        { name: "Frontend", value: "frontend" },
        { name: "Sunpics Attributes",  value: "sunpicsAttributes" },
        { name: "Sunpics Configurations",  value: "sunpicsConfigurations" },
        { name: "Sunpics Galleries",  value: "sunpicsGalleries" },
        { name: "Extra Pages",  value: "extraPages" },
      ];
    }

    getPages() {
        return {
            "Admin": [
              { name: "Admin",                redirect: "wp-admin/",                                    value: "admin" },
              { name: "Custom Fields",        redirect: "wp-admin/admin.php?page=wapf-field-groups",    value: "customFields" },
              { name: "New Custom Field",     redirect: "wp-admin/post-new.php?post_type=wapf_product", value: "newCustomField" },
              { name: "Products",             redirect: "wp-admin/edit.php?post_type=product",          value: "products" },
              { name: "New Product",          redirect: "wp-admin/post-new.php?post_type=product",      value: "newProduct" },
              { name: "Edit Product",         redirect: "wp-admin/post.php?post={0}&action=edit",       value: "editProduct" },
              { name: "Coupons",              redirect: "wp-admin/edit.php?post_type=shop_coupon",      value: "coupons" },
              { name: "New Coupon",           redirect: "wp-admin/post-new.php?post_type=shop_coupon",  value: "newCoupon" },
              { name: "Orders",               redirect: "wp-admin/edit.php?post_type=shop_order",       value: "orders" },
              { name: "See Order",            redirect: "wp-admin/post.php?post={0}&action=edit",       value: "editOrder" }
            ],
            "Frontend": [
              { name: "Home",         redirect: "",                       value:"home" },
              { name: "Cart",         redirect: "cart/",                  value:"cart" },
              { name: "Checkout",     redirect: "checkout/",              value:"checkout" },
              { name: "My Projects",  redirect: "my-account/myprojects/", value:"projects" },
              { name: "My Account",   redirect: "my-account/",            value:"account" },
              { name: "Login",        redirect: "login/",                 value:"login" },
              { name: "Registration", redirect: "registration/",          value:"registration" }
            ],
            "Sunpics Attributes": [
              { name: "Dimensions",     redirect: "wp-admin/admin.php?page=dimension-identifier",     value:"dimension" },
              { name: "Covers",         redirect: "wp-admin/admin.php?page=cover-identifier",         value:"cover" },
              { name: "Textures",       redirect: "wp-admin/admin.php?page=texture-identifier",       value:"texture" },
              { name: "Windows",        redirect: "wp-admin/admin.php?page=window-identifier",        value:"window" },
              { name: "Colors",         redirect: "wp-admin/admin.php?page=color-identifier",         value:"color" },
              { name: "Frames",         redirect: "wp-admin/admin.php?page=frame-identifier",         value:"frame" },
              { name: "Packs",          redirect: "wp-admin/admin.php?page=pack-identifier",          value:"pack" },
              { name: "Photo Finishes", redirect: "wp-admin/admin.php?page=photo-finish-identifier",  value:"photo-finish" }
            ],
            "Sunpics Configurations": [
              { name: "Main",           redirect: "wp-admin/admin.php?page=main-identifier",          value:"main" },
              { name: "Config",         redirect: "wp-admin/admin.php?page=config-identifier",        value:"config" },
              { name: "Barcodes",       redirect: "wp-admin/admin.php?page=bar-code-identifier",      value:"bar-code" },
              { name: "Margins",        redirect: "wp-admin/admin.php?page=margin-identifier",        value:"margin" },
              { name: "Identifiers",    redirect: "wp-admin/admin.php?page=identifier-identifier",    value:"identifier" },
              { name: "Crop Marks",     redirect: "wp-admin/admin.php?page=crop-marks-identifier",    value:"crop-marks" },
              { name: "Packs",          redirect: "wp-admin/admin.php?page=pack-identifier",          value:"pack" },
              { name: "Photo Finishes", redirect: "wp-admin/admin.php?page=photo-finish-identifier",  value:"photo-finish" }
            ],
            "Sunpics Galleries": [
              { name: "Cliparts",         redirect: "wp-admin/admin.php?page=clipart-identifier",         value:"clipart" },
              { name: "Backgrounds",      redirect: "wp-admin/admin.php?page=background-identifier",      value:"background" },
              { name: "Masks",            redirect: "wp-admin/admin.php?page=mask-identifier",            value:"mask" },
              { name: "Themes",           redirect: "wp-admin/admin.php?page=theme-identifier",           value:"theme" },
              { name: "Theme Categories", redirect: "wp-admin/admin.php?page=theme-category-identifier",  value:"theme-category" },
              { name: "Gallery Default",  redirect: "wp-admin/admin.php?page=gallery-default-identifier", value:"gallery-default" },
              { name: "Cover Templates",  redirect: "wp-admin/admin.php?page=cover-template-identifier",  value:"cover-template" }
            ],
            "Extra Pages": [
              { name: "Extra Pages",          redirect: "wp-admin/admin.php?page=wapf-field-groups&extra_pages=true",                           value: "extraPages" },
              { name: "New Extra Pages",      redirect: "wp-admin/post-new.php?post_type=wapf_product&field=extrapages",                        value: "newExtraPages" },
              { name: "Edit Extra Pages",     redirect: "wp-admin/post.php?post={0}&action=edit&field=extrapages",                              value: "editExtraPages" },
              { name: "Box Extra Pages",      redirect: "wp-admin/admin.php?page=wapf-field-groups&extra_pages=true&extra_pages_type=box",      value: "boxExtraPages" },
              { name: "New Box Extra Pages",  redirect: "wp-admin/post-new.php?post_type=wapf_product&field=extrapages&extra_pages_type=box",   value: "newBoxExtraPages" },
              { name: "Edit Box Extra Pages", redirect: "wp-admin/post.php?post={0}&action=edit&field=extrapages&extra_pages_type=box",         value: "editBoxExtraPages" },
            ]
        }
    }

    getClients() {
        return {
            "Staging": [
              { name: "Demo",             value: "https://store-demo-staging.sunpics.online/" },
              { name: "Demo Partner 2",   value: "https://store-demo-staging-2.sunpics.online/" },
              { name: "Profox",           value: "https://staging.profoxprofissional.com.br/" },
              { name: "FotoGM",           value: "https://store-fotogm-v1-staging.sunpics.online/" },
              { name: "Albume",           value: "https://store-beeriprint-v1-staging.sunpics.online/" },
              { name: "Bepix",            value: "https://staging.bepix.com.br/" }
            ],
            "Production": [
              { name: "Demo",       value: "https://store-demo.sunpics.online/" },
              { name: "My Album ",  value: "https://myalbum.co.il/" },
              { name: "Profox",     value: "https://profoxprofissional.com.br/" },
              { name: "FotoGM",     value: "https://foto-gm.si/" },
              { name: "Ceu-Azul",   value: "https://ceu-azul.pt/" },
              { name: "Albume",     value: "https://new-store.albume.co.il/" },
              { name: "Bepix",      value: "https://bepix.com.br/" }
            ]
          }
    }
    //#endregion
}