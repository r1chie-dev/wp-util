class GlobalUtil {

    // html
    htmlElement = "html";
    bodyElement = "body";
    clickEvent  = "click";

    // elements
    buttonElement     = ".open-client-page";
    pagesSelect       = "#pages-select";
    pagesTypeSelect   = "#pages-type-select";
    clientsSelect     = "#clients-select";
    clientsTypeSelect = "#clients-type-select";
    bulbModeIcon      = ".screenMode span";
    idSearchWrap      = ".id-to-search-wrap";
    idSearchInput     = ".id-to-search";

    // selectors
    lightOnClass      = "lightOn";
    darkModeClass     = "darkMode";
    changeEvent       = "change";
    keyupEvent        = "keyup";
    redirectData      = "redirect";
    hiddenClass       = "hidden";
    visibleSelector   = ":visible";
    selectedAttribute = "selected";
    optionSelected    = "option:selected";

    // util
    optionForIdSearch = [ "editProduct", "editOrder", "editExtraPages", "editBoxExtraPages" ];
    newTabEvent       = "_blank";
    
    // clients
    clientsTypeStg  = "staging";
    clientsTypeProd = "production";

    // pages
    pagesTypeAdmin                  = "admin";
    pagesTypeFrontend               = "frontend";
    pagesTypeSunpicsAttributes      = "sunpicsAttributes";
    pagesTypeSunpicsConfigurations  = "sunpicsConfigurations";
    pagesTypeSunpicsGalleries       = "sunpicsGalleries";
    pagesTypeExtraPages             = "extraPages";

    // cookies
    cookieUserConfig          = "userConfig";
    cookieDarkModePropertie   = "darkMode";
    cookieClientTypePropertie = "clientType";
    cookieClientPropertie     = "client";
    cookiePagePropertie       = "page";
    cookiePageTypePropertie   = "pageType";
    cookieIdSearchPropertie   = "idSearch";

    //#region get pages
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

    getAllPages() {
      return {
          "Admin": this.getAdminPages(),
          "Frontend": this.getFrontendPages(),
          "Sunpics Attributes": this.getSunpicsAttributesPages(),
          "Sunpics Configurations": this.getSunpicsConfigurationsPages(),
          "Sunpics Galleries": this.getSunpicsGalleriesPages(),
          "Extra Pages": this.getSunpicsExtraPagePages()
      }
    }

    getAdminPages() {
      return [
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
      ];
    }

    getFrontendPages() {
      return [
        { name: "Home",         redirect: "",                       value:"home" },
        { name: "Cart",         redirect: "cart/",                  value:"cart" },
        { name: "Checkout",     redirect: "checkout/",              value:"checkout" },
        { name: "My Projects",  redirect: "my-account/myprojects/", value:"projects" },
        { name: "My Account",   redirect: "my-account/",            value:"account" },
        { name: "Login",        redirect: "login/",                 value:"login" },
        { name: "Registration", redirect: "registration/",          value:"registration" }
      ];
    }

    getSunpicsAttributesPages() {
      return [
        { name: "Dimensions",     redirect: "wp-admin/admin.php?page=dimension-identifier",     value:"dimension" },
        { name: "Covers",         redirect: "wp-admin/admin.php?page=cover-identifier",         value:"cover" },
        { name: "Textures",       redirect: "wp-admin/admin.php?page=texture-identifier",       value:"texture" },
        { name: "Windows",        redirect: "wp-admin/admin.php?page=window-identifier",        value:"window" },
        { name: "Colors",         redirect: "wp-admin/admin.php?page=color-identifier",         value:"color" },
        { name: "Frames",         redirect: "wp-admin/admin.php?page=frame-identifier",         value:"frame" },
        { name: "Packs",          redirect: "wp-admin/admin.php?page=pack-identifier",          value:"pack" },
        { name: "Photo Finishes", redirect: "wp-admin/admin.php?page=photo-finish-identifier",  value:"photo-finish" }
      ];
    }

    getSunpicsConfigurationsPages() {
      return [
        { name: "Main",           redirect: "wp-admin/admin.php?page=main-identifier",                                                                value:"main" },
        { name: "Config",         redirect: "wp-admin/admin.php?page=config-identifier",                                                              value:"config" },
        { name: "Barcodes",       redirect: "wp-admin/admin.php?page=bar-code-identifier",                                                            value:"bar-code" },
        { name: "Margins",        redirect: "wp-admin/admin.php?page=margin-identifier",                                                              value:"margin" },
        { name: "Identifiers",    redirect: "wp-admin/admin.php?page=identifier-identifier",                                                          value:"identifier" },
        { name: "Crop Marks",     redirect: "wp-admin/admin.php?page=crop-marks-identifier",                                                          value:"crop-marks" },
        { name: "Partners",       redirect: "wp-admin/admin.php?page=sunpics-partners",                                                               value:"sunpics-partners" },
        { name: "Holidays",       redirect: "wp-admin/admin.php?page=holidays-identifier",                                                            value:"holidays-identifier" },
        { name: "Translations",   redirect: "wp-admin/admin.php?page=translations",                                                                   value:"translations" },
        { name: "Analytics",      redirect: "wp-admin/admin.php?page=sun-analytics&sunreport=sun-abandoned-carts&tab=sun-abandoned-carts-dashboard",  value:"analytics" },
        { name: "Order PDF",      redirect: "wp-admin/admin.php?page=order-pdf",                                                                      value:"order-pdf" },
        { name: "Order Export",   redirect: "wp-admin/admin.php?page=sun-order-export",                                                               value:"sun-order-export" }

      ];
    }

    getSunpicsGalleriesPages() {
      return [
        { name: "Cliparts",         redirect: "wp-admin/admin.php?page=clipart-identifier",         value:"clipart" },
        { name: "Backgrounds",      redirect: "wp-admin/admin.php?page=background-identifier",      value:"background" },
        { name: "Masks",            redirect: "wp-admin/admin.php?page=mask-identifier",            value:"mask" },
        { name: "Themes",           redirect: "wp-admin/admin.php?page=theme-identifier",           value:"theme" },
        { name: "Theme Categories", redirect: "wp-admin/admin.php?page=theme-category-identifier",  value:"theme-category" },
        { name: "Gallery Default",  redirect: "wp-admin/admin.php?page=gallery-default-identifier", value:"gallery-default" },
        { name: "Cover Templates",  redirect: "wp-admin/admin.php?page=cover-template-identifier",  value:"cover-template" }
      ];
    }

    getSunpicsExtraPagePages() {
      return [
        { name: "Extra Pages",          redirect: "wp-admin/admin.php?page=wapf-field-groups&extra_pages=true",                           value: "extraPages" },
        { name: "New Extra Pages",      redirect: "wp-admin/post-new.php?post_type=wapf_product&field=extrapages",                        value: "newExtraPages" },
        { name: "Edit Extra Pages",     redirect: "wp-admin/post.php?post={0}&action=edit&field=extrapages",                              value: "editExtraPages" },
        { name: "Box Extra Pages",      redirect: "wp-admin/admin.php?page=wapf-field-groups&extra_pages=true&extra_pages_type=box",      value: "boxExtraPages" },
        { name: "New Box Extra Pages",  redirect: "wp-admin/post-new.php?post_type=wapf_product&field=extrapages&extra_pages_type=box",   value: "newBoxExtraPages" },
        { name: "Edit Box Extra Pages", redirect: "wp-admin/post.php?post={0}&action=edit&field=extrapages&extra_pages_type=box",         value: "editBoxExtraPages" },
      ];
    }
    //#endregion

    //#region get clients
    getClientsType() {
      return [
        { name: "Staging",    value: "staging" },
        { name: "Production", value: "production" }
      ];
    }

    getAllClients() {
      return {
          "Staging": this.getStagingClients(),
          "Production": this.getProductionClients()
        }
    }

    getStagingClients() {
      return [
        { name: "Demo",             redirect: "https://store-demo-staging.sunpics.online/",           value: "demo" },
        { name: "Demo Partner 2",   redirect: "https://store-demo-staging-2.sunpics.online/",         value: "demo2" },
        { name: "Profox",           redirect: "https://staging.profoxprofissional.com.br/",           value: "profox" },
        { name: "FotoGM",           redirect: "https://store-fotogm-v1-staging.sunpics.online/",      value: "fotogm" },
        { name: "Albume",           redirect: "https://store-beeriprint-v1-staging.sunpics.online/",  value: "albume" },
        { name: "Bepix",            redirect: "https://staging.bepix.com.br/",                        value: "bepix" }
      ];
    }

    getProductionClients() {
      return [
        { name: "Demo",       redirect: "https://store-demo.sunpics.online/", value: "demo" },
        { name: "My Album ",  redirect: "https://myalbum.co.il/",             value: "myalbum" },
        { name: "Profox",     redirect: "https://profoxprofissional.com.br/", value: "profox" },
        { name: "FotoGM",     redirect: "https://foto-gm.si/",                value: "fotogm" },
        { name: "Ceu-Azul",   redirect: "https://ceu-azul.pt/",               value: "ceuazul" },
        { name: "Albume",     redirect: "https://new-store.albume.co.il/",    value: "albume" },
        { name: "Bepix",      redirect: "https://bepix.com.br/",              value: "bepix" }
      ];
    }
    //#endregion

    //#region get cookies
    getCookieDefault() {
      return {
        "darkMode":   false,
        "clientType": "staging",
        "client":     "demo",
        "pageType":  "admin",
        "page":       "admin",
        "idSearch":   "",
      };
    }
    //#endregion
}