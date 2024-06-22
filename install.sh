read -n1 -rep 'Would you like to install the packages? (y,n)' INST
if [[ $INST == "Y" || $INST == "y" ]]; then
sudo pacman -Syu
sudo pacman -S --needed base-devel git
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si

yay -S --noconfirm anydesk-bin\
kitty\
swaybg swaylock-effects wofi wlogout mako thunar\
ttf-jetbrains-mono-nerd noto-fonts-emoji\
polkit-gnome python-requests starship\
swappy grim slurp pamixer brightnessctl gvfs\
bluez bluez-utils lxappearance xfce4-settings\
dracula-gtk-theme dracula-icons-git\ xdg-desktop-portal-hyprland-git\
codium cava
sudo pacman -S --noconfirm sddm base-devel gdb ninja gcc cmake libxcb xcb-proto xcb-util  
xcb-util-keysyms libxfixes libx11 libxcomposite xorg-xinput libxrender  
pixman wayland-protocols cairo pango seatd libxkbcommon xcb-util-wm  
xorg-xwayland cmake wlroots mesa git meson polkit pulseaudio pavucontrol telegram-desktop mousepad gimp inkscape  
blender ghostscript obs-studio xdg-desktop-portal-wlr transmission-gtk python  
imv mpv nemo grim slurp swaybg swaylock mako jq wofi htop cmus neofetch ranger unzip
ttf-nerd-fonts-symbols


git clone --recursive https://github.com/hyprwm/Hyprland  
cd Hyprland  
git submodule init  
git submodule update  
sudo make install  
  
cp Hyprland/example/hyprland.conf ~/.config/hypr/

git clone https://github.com/hyprwm/hyprpaper  
cd hyprpaper  
make all  
  
sudo cp ~/hyprpaper/build/hyprpaper /usr/bin

gsettings set org.gnome.desktop.interface icon-theme breeze-icons-dark  
gsettings set org.gnome.desktop.interface gtk-theme Fantome
gsettings set org.gnome.desktop.interface cursor-theme capitaine-cursors

git clone https://gitlab.com/prolinux410/owl_dots

sudo cp -r -i ~/owl_dots/hyprland/hypr_arch/.config ~/.config

fi
