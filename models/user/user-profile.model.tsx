export interface UserProfileModel {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: AvatarUrls;
  meta: any[];
  is_super_admin: boolean;
  woocommerce_meta: WooCommerceMeta;
  elementor_introduction: string;
  _links: UserLinks;
}

export interface UserLinks {
  self: Array<{
    href: string;
    targetHints: {
      allow: string[];
    };
  }>;
  collection: Array<{
    href: string;
  }>;
}

export interface AvatarUrls {
  [key: string]: string;
}

export interface WooCommerceMeta {
  variable_product_tour_shown: string;
  activity_panel_inbox_last_read: string;
  activity_panel_reviews_last_read: string;
  categories_report_columns: string;
  coupons_report_columns: string;
  customers_report_columns: string;
  orders_report_columns: string;
  products_report_columns: string;
  revenue_report_columns: string;
  taxes_report_columns: string;
  variations_report_columns: string;
  dashboard_sections: string;
  dashboard_chart_type: string;
  dashboard_chart_interval: string;
  dashboard_leaderboard_rows: string;
  homepage_layout: string;
  homepage_stats: string;
  task_list_tracked_started_tasks: string;
  android_app_banner_dismissed: string;
  launch_your_store_tour_hidden: string;
  coming_soon_banner_dismissed: string;
}
