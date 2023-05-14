commit_messages=(
  "fix: scss issue on mobile device" 
  "fix: issue with login page" 
  "feat: add new feature"
  "feat: feat: Add user registration functionality"
  "chore: update dependencies" 
  "docs: update documentation"
  "refactor: improve performance"
  "refactor: Removed deprecated code and dependencies"
  )

# prompt the user to choose a commit message or enter a custom one
PS3='Please choose a commit message or enter "c" to write your own: '
options=("${commit_messages[@]}" "c")
select opt in "${options[@]}"
do
  case $opt in
    "c")
      read -p "Enter your commit message: " commit_message
      break
      ;;
    *)
      commit_message=$opt
      break
      ;;
  esac
done

git add .
git commit -m "$commit_message"
remote=$(git remote | head -n1)
branch=$(git symbolic-ref --short HEAD)
git push -u $remote $branch

if [ $? -eq 0 ]; then
  # if the exit status is 0, the push was successful
  echo -e "\033[32mPush successful!\033[0m"
else
  # if the exit status is not 0, the push failed
  echo -e "\033[31mPush failed.\033[0m"
fi
