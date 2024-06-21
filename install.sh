read -n1 -rep 'Would you like to install the packages? (y,n)' INST
if [[ $INST == "Y" || $INST == "y" ]]; then
sudo pacman -Syu
sudo pacman -S --needed base-devel git
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
yay -S --noconfirm anydesk-bin\
hyprland-bin kitty waybar-hyprland \
swaybg swaylock-effects wofi wlogout mako thunar \
ttf-jetbrains-mono-nerd noto-fonts-emoji \
polkit-gnome python-requests starship \
swappy grim slurp pamixer brightnessctl gvfs \
bluez bluez-utils lxappearance xfce4-settings \
dracula-gtk-theme dracula-icons-git xdg-desktop-portal-hyprland-git
sudo pacman -S --noconfirm ssdm
fi
