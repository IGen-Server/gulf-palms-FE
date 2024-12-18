import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserProfileModel } from "@/models/user/user-profile.model";
import { getNameInitials } from "@/services/utility/utility.service";
import * as Avatar from "@radix-ui/react-avatar";

export function UserAvatarDropdown({ userProfileModel }: { userProfileModel: UserProfileModel }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button variant="outline"> */}
          <Avatar.Root className="cursor-pointer inline-flex size-[36px] border-2 select-none items-center justify-center overflow-hidden rounded-full align-middle">
              <Avatar.Image
                className="size-full rounded-[inherit] object-cover"
                src={userProfileModel.image}
                alt={userProfileModel.firstName}
              />
              <Avatar.Fallback
                className="leading-1 flex size-full items-center justify-center text-[15px] font-medium"
                delayMs={500}
              >
                {getNameInitials(`${userProfileModel.firstName} ${userProfileModel.lastName}`)}
              </Avatar.Fallback>
            </Avatar.Root>
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-60 min-w-44 mr-4 mt-1">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup> */}

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          Log out
          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
