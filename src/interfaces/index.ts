export type AllServices = {
  cancel: boolean;
  category: string;
  description: string;
  dripfeed: boolean;
  max: number;
  min: number;
  name: string;
  rate: number;
  refill: boolean;
  service: number;
  type:
    | "Default"
    | "Custom Comments"
    | "Package"
    | "Mentions User Followers"
    | "Invites from Groups"
    | "Mentions User Followers"
    | "Mentions Custom List"
    | "Subscriptions"
    | "Custom Comments Package"
    | "Comment Likes"
    | "Mentions";
};
