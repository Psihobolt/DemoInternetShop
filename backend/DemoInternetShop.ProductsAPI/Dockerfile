FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /vsdbg
RUN apt-get update \
&& apt-get install -y --no-install-recommends \
unzip \
&& rm -rf /var/lib/apt/lists/* \
&& curl -sSL https://aka.ms/getvsdbgsh | bash /dev/stdin -v latest -l /vsdbg

EXPOSE 5000

WORKDIR /src/
COPY DemoInternetShop.ProductsAPI.csproj ./
RUN ["dotnet", "restore"]

COPY . .

ENTRYPOINT ["dotnet","watch", "run","--no-launch-profile"]
