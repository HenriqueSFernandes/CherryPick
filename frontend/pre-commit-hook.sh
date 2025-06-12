#!/bin/sh

mkdir -p ../.git/hooks
tee ../.git/hooks/pre-commit << EOF
#!/bin/sh
cd frontend/
npx lint-staged
EOF

chmod +x ../.git/hooks/pre-commit
