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

echo "You pushed in $branch from $remote successfully"
